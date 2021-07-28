using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AppearDissapear : MeshGenerator
{

    public GameObject[] Prefabs;

    // Start is called before the first frame update
    void Start()
    {

        MakeSquares();
        
        
    }

    void MakeSquares()
    {
        for (int i = 0; i < zSize; i++)
        {
            for (int j = 0; j < xSize; j++)
            {
                int randomPrefab = Random.Range(0, Prefabs.Length);

                GameObject copiedObject = (GameObject)Instantiate(Prefabs[randomPrefab], new Vector3(xSize * 2 * j, this.transform.position.y, zSize * 2 * i), this.transform.rotation);

            }
        }

    }


}
