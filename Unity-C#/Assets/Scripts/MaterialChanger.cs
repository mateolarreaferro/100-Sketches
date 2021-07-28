using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MaterialChanger : MonoBehaviour
{
    float change;
    public Material _material;
    // Start is called before the first frame update

    void Start()
    {
        _material = GetComponent<Material>();
        //_material.EnableKeyword("_METALLICGLOSSMAP");
        _material.SetFloat("_Glossiness", change);
    }


    // Update is called once per frame
    void Update()
    {
        change -= 0.01f;


    }
}
