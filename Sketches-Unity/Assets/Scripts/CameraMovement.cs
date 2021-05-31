using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraMovement : MonoBehaviour
{
    public bool MoveCamera;
    public Camera mainCam;
    public float movement;
    

    // Update is called once per frame
    void Update()
    {
        if (MoveCamera == true)
        {

            Camera.main.transform.Translate(0, 0, - movement);

        }
        
    }
}
