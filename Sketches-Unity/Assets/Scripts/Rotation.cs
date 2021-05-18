using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Rotation : MonoBehaviour
{

    public GameObject[] layers;
    public bool Randomize = true;
   

    void Start()
    {
        //ps = GetComponent<ParticleSystem>();
        StartCoroutine(Appear());
        StartCoroutine(RandomizeParameters());
    }




    // Update is called once per frame
    void Update()
    {
        for (int i = 0; i < layers.Length; i++)
        {
            //int randomSpeeds = Random.Range(0, speeds.Length);
            layers[i].transform.Rotate(new Vector3(0, 0, 90) * Time.deltaTime * .2f);
        }

        
        
    }

    IEnumerator Appear()
    {
        for (int a = 0; a < layers.Length; a++)
        {
            layers[a].gameObject.SetActive(true);

            //Randomize time
            int seconds = Random.Range(1, 3);
            //var shape = ps.shape;
            //shape.radius = 6;
            var emission = layers[a].GetComponent<ParticleSystem>().emission;
            emission.enabled = true;

            yield return new WaitForSeconds(seconds);

        }
        
    }

    IEnumerator RandomizeParameters()
    {
        while (Randomize == true)
        {
            for (int a = 0; a < layers.Length; a++)
            {

                //Randomize time
                int change = Random.Range(1, 5);
                float randomRadius = Random.Range(1f, 7f);

                var shape = layers[a].GetComponent<ParticleSystem>().shape;
                shape.radius = randomRadius;

                yield return new WaitForSeconds(change);

            }

        }
    }
}
