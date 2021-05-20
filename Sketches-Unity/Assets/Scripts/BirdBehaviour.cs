using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BirdBehaviour : MonoBehaviour
{

    //Audio Configurations
    AudioSource source;
	float minVolume, maxVolume; //Volume
	float deltaPitch; //Pitch
	float minDoppler, maxDoppler; //Doppler

    float timer = 0;
    float change;
    bool CanPlay = true;
    bool Change = true;

    float speed;

    Color[] colors;
    float duration = 1f;

    //Time
    [Header("Time between plays")]
    public int minimumTime, maximumTime;


    // Start is called before the first frame update
    void Start()
    {
        change = Random.Range(minimumTime, maximumTime);

        source = GetComponent<AudioSource>();

        minVolume = 0.1f;
        maxVolume = 0.7f;
        minDoppler = 0.5f;
        maxDoppler = 3.0f;
        deltaPitch = 0.5f;
        speed = Random.Range(0.1f, 2f);

        colors = new Color[]

     {
            Color.red,
            Color.black,
            Color.gray,
            Color.blue,
            Color.yellow
     };

        StartCoroutine(ChangeLightColor());


    }

    // Update is called once per frame
    void Update()
    {
        timer += Time.deltaTime;
        CanPlay = true;
        PlayandRandomize();
        transform.Rotate(new Vector3(0, 45, 0) * Time.deltaTime * speed);
    }

    private void PlayandRandomize()
    {
        if (timer > change && CanPlay == true && source.isPlaying == false)
        {

            source.volume = Random.Range(minVolume, maxVolume);
            source.dopplerLevel = Random.Range(minDoppler, maxDoppler);
            source.pitch = Random.Range(1 - deltaPitch, 1 + deltaPitch);
            source.Play();
            change = Random.Range(minimumTime, maximumTime);
            timer = 0;
            CanPlay = false;


        }
    }
    IEnumerator ChangeLightColor()
    {
        while (Change == true)
        {
            float t = Mathf.PingPong(Time.time, duration) / duration;
            GetComponent<Light>().color = Color.Lerp(colors[Random.Range(0, colors.Length)], colors[Random.Range(0, colors.Length)], t);

            yield return new WaitForSeconds(Random.Range(1f, 20f));
        }
    }
}
