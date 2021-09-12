import React from 'react'
import "./Ex2.css";

function Ex2() {
    // const[weightTeam1, setWeightTeam1] = useState(0)
    // const[weightTeam2, setWeightTeam2] = useState(0)
    // const[string, setString] = useState("");

    const numArray = [60, 40, 55, 75, 64];
    const alternatingSums=(array)=>{
        console.log('click');
        let team_1 = 0; 
        let team_2 = 0; 
        // let numArray=string.split(","); 
        let final = [];
        for(let i in array){
            if(i % 2 === 0) team_1+= parseInt(array[i]);
            else team_2 += parseInt(array[i]);  
        }
        final.push(team_1);
        final.push(team_2);
        return(final);
        // setWeightTeam1(team_1);
        // setWeightTeam2(team_2);
    }
    return (
        <div className="ex_2">
            <h3>Section 2</h3>
            {/* <for className="ex_2__form">
                <label>Enter your list number with "," to seperate</label>
                <input type="text" value={string} onChange={e => setString(e.target.value)}/> 
                <button onClick={alternatingSums(string)}>Result</button>
                <label>{(`The result is: [${weightTeam1},${weightTeam2}]`)}</label>
            </for> */}
            <label>{(`the array is [${numArray}], and the final result is [${alternatingSums(numArray)}]`)}</label>
            
        </div>
    )
}

export default Ex2;
