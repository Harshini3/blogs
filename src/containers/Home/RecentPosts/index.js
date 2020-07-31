import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card';


const RecentPosts = (props) => {
  return(
    <div style={props.style}>
        <Card style={{marginBottom: '20px'}}>
            <div className="postImageWrapper">
                <img src={"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F35%2F2014%2F03%2F25191223%2FGettyImages-1049840750.jpg"} alt=""/>
            </div>

            <div style={{textAlign: 'center'}}>
                <h2>Fitness during Pandemic</h2>
                <span>posted on June 21, 2020 </span>
                <p>Benefits of working out at home:

Home workouts are a great substitute for your gym sessions. There are a number of different types of home workouts/exercises:
<br/><br/>

A) Using your bodyweight alone
<br/>
B) Using basic equipment such as Dumbbells, Resistance Bands/Tubes
<br/>
C) Using everyday household items such as backpacks, water bottles, buckets and even brooms</p>

                 

            </div>

            


        </Card>
    </div>
   )

 }

export default RecentPosts