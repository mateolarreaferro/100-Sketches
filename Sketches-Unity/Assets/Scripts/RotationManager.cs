using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RotationManager : MonoBehaviour
{
    public GameObject[] terrains;
    // Update is called once per frame
    void Update()
    {
        for (int i = 0; i < terrains.Length; i++)
        {
            terrains[i].transform.Rotate(new Vector3(0, 90, 0) * Time.deltaTime * 0.1f);
        }
        
    }
}
