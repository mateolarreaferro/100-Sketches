using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(AudioSource))]
public class AudioReactive : MonoBehaviour
{

    AudioSource _audioSource;
    float[] samples = new float[512]; //static so that we can access from other scripts
    float[] freqBand = new float[8];
    GameObject[] _objects = new GameObject[512];
    public float maxScale;
    public GameObject[] Prefabs;
    public Transform _referencePoint;

    // Start is called before the first frame update
    void Start()
    {
        _audioSource = GetComponent<AudioSource>();
        GenerateObjects();
    }

    // Update is called once per frame
    void Update()
    {
        GetSpectrumAudioSource();
        MakeFrequencyBands();

        for (int i = 0; i < _objects.Length; i++)
        {
            if (_objects != null)
            {
                _objects[i].transform.localScale = new Vector3(1, samples[i] * maxScale + 2, 1);
            }
        }

    }

    void GetSpectrumAudioSource()
    {
        _audioSource.GetSpectrumData(samples, 0, FFTWindow.Blackman);
    }

    void MakeFrequencyBands()
    {

        int count = 0;

        for (int i = 0; i < 8; i++)
        {
            float average = 0;
            int sampleCount = (int)Mathf.Pow(2, i) * 2; // --> 2, 4, 8, 16, 32,....., 256

            if (i == 7)
            {
                sampleCount += 2; // to get 512 intead of 510
            }

            for (int j = 0; j < sampleCount; j++)
            {
                average += samples[count] * (count + 1);
                count++;
            }

            average /= count;

            freqBand[i] = average * 10;

        }
    }

    void GenerateObjects()
    {
        for (int i = 0; i < samples.Length; i++)
        {
            float randomX = Random.Range(-9f, 9f);
            float randomZ = Random.Range(-9f, 9f);
            int randomObject = Random.Range(0, Prefabs.Length);
            GameObject copiedObject = (GameObject)Instantiate(Prefabs[randomObject], _referencePoint);
            copiedObject.transform.position = new Vector3(randomX, this.transform.position.y, randomZ);
            copiedObject.name = "" + i;
            _objects[i] = copiedObject;
        }
    }
}
