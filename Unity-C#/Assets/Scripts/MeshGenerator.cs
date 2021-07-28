using System.Collections;
using System.Collections.Generic;
using UnityEngine;


[RequireComponent(typeof(MeshFilter))]
public class MeshGenerator : MonoBehaviour
{
    Mesh mesh;
    Vector3[] vertices;
    int[] triangles;

    public int xSize = 20;
    public int zSize = 20;



    // Start is called before the first frame update
    void Start()
    {
        mesh = new Mesh();
        GetComponent<MeshFilter>().mesh = mesh;

        CreateShape();


    }


    private void Update()
    {
        UpdateMesh();
        
    }

    void CreateShape()
    {
        //CREATES QUAD
        //vertices = new Vector3[]
        //{
        //    new Vector3 (0, 0, 0),
        //    new Vector3 (0, 0, 1),
        //    new Vector3 (1, 0, 0),
        //    new Vector3(1, 0, 1)
        //};

        //triangles = new int[]
        //{
        //    0, 1, 2,
        //    1, 3, 2
        //};

        ////How to calculate the total vertex count
        //3 squares on x has 4 vertices
        //4 squares on z has 5 vertices
        //    vertex count = (xSize + 1) * (zSize + 1)

        vertices = new Vector3[(xSize + 1) * (zSize + 1)];

        
        for (int i = 0, z = 0; z <= zSize; z++)
        {
            for (int x = 0; x <= xSize; x++)
            {
                float xSum = Random.Range(0.1f, 1f);
                float zSum = Random.Range(0.1f, 1f);
                float y = Mathf.PerlinNoise(x * xSum, z * zSum) * 2f;
                vertices[i] = new Vector3(x, y, z);
                i++;
            }
        }

        triangles = new int[xSize * zSize * 6];

        int vert = 0;
        int tri = 0;

        for (int z = 0; z < zSize; z++)
        {
            for (int x = 0; x < xSize; x++)
            {

                triangles[tri + 0] = vert + 0;
                triangles[tri + 1] = vert + xSize + 1;
                triangles[tri + 2] = vert + 1;
                triangles[tri + 3] = vert + 1;
                triangles[tri + 4] = vert + xSize + 1;
                triangles[tri + 5] = vert + xSize + 2;
                vert++;
                tri += 6;

                
            }
            vert++;

        }
        

    


    }

    void UpdateMesh()
    {
        mesh.Clear();

        mesh.vertices = vertices;
        mesh.triangles = triangles;

        mesh.RecalculateNormals(); //calculate light data

    }

    //Debugging Vertices 
    //private void OnDrawGizmos()
    //{
    //    if (vertices == null)
    //        return;

    //    for (int i = 0; i < vertices.Length; i++)
    //    {
    //        Gizmos.DrawSphere(vertices[i], .001f);
    //    }
    //}

}
