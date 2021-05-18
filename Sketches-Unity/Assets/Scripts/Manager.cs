using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Manager : MonoBehaviour
{
    public GameObject[] elements;
    public bool ChangeScaling = true;
    private Material material;
    private Color previousColor;
    public AudioClip[] clips;
    public GameObject sun;




    // Start is called before the first frame update
    void Start()
    {
        StartCoroutine(ChangeScale());

    }


    IEnumerator ChangeScale()
    {
        while (ChangeScaling == true)
        {
            for (int i = 0; i < elements.Length; i++)
            {
                elements[i].transform.localScale = new Vector3(.2f, Random.Range(.4f, 10f), .2f);
                elements[i].GetComponent<Renderer>().material.color =
                new Color(Random.Range(0f, 1f), Random.Range(0f, 1f), Random.Range(0f, 1f));

                int randomClip = Random.Range(0, clips.Length);
                elements[i].GetComponent<AudioSource>().clip = clips[randomClip];
                elements[i].GetComponent<AudioSource>().Play();

                //Vector3 Center = elements[i].GetComponent<CapsuleCollider>().center;
                //elements[i].GetComponent<MeshRenderer>().sharedMaterial.SetVector("_RippleCenter", Center);
                //elements[i].GetComponent<MeshRenderer>().sharedMaterial.SetFloat("_RippleStartTime", Time.time);

                //Color rippleColor = Color.HSVToRGB(Random.value, 1, 1);

                //elements[i].GetComponent<MeshRenderer>().sharedMaterial.SetColor("_RippleColor", rippleColor);



            }

            yield return new WaitForSeconds(Random.Range(1, 5));

        }

    }
    private void Update()
    {
        sun.transform.Rotate(new Vector3(45, 45, 45) * Time.deltaTime * 0.2f);
    }
}
