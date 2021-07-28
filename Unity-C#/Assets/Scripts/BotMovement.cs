using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AI;

//x (-12, 12)
//z (-8,, 8) 

public class BotMovement : MonoBehaviour
{

    
    public NavMeshAgent agent;
    public bool Moving = true;
    public float speed;

    
    // Start is called before the first frame update
    void Start()
    {
        agent = GetComponent<NavMeshAgent>();
        StartCoroutine(SetLocation());
        
        
    }

    IEnumerator SetLocation()
    {
        while (Moving == true)
        {
            float randomX = Random.Range(-12f, 12f);
            float randomZ = Random.Range(-8f, 8f);


            Vector3 points = new Vector3(randomX, this.transform.position.y, randomZ * Time.deltaTime * speed);
            int randomTime = Random.Range(1, 3);
            agent.SetDestination(points);

            yield return new WaitForSeconds(randomTime);
        }
    }

    

 
}
