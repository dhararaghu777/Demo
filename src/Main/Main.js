import React, {useState, useEffect, useMemo, useCallback} from 'react';
import "./Main.css";
import {nowShowing} from './MoviesList';


function Main() {

    const [language, setLanguage]=useState([]);
    const [gener, setGener]=useState([]);
    const [format, setFormat]=useState([]);
    const [data, setData]= useState([]);
    const [changed, setChanged]=useState(0);



    const filterData=(songs, list,value)=>{
        // console.log(`filter data ${value}: `, songs, list, value);
        let arr=[];
        if(list.length)
        {
            for(let i=0;i<list.length;i++){
                const temp=songs.filter(song=> song[value]==list[i]);
                arr.push(...temp);
            }
        }
        else{
            arr=[...songs];
        }
        return arr;
    };


    

    const onChangeHandler=(e)=>{
        const {name, value,checked}=e.target;
        let arr=[];
        switch(name){
            case 'language': arr=language; break;
            case 'gener': arr=gener; break;
            case 'format': arr=format; break;
            default: break;
        }

        if(checked){
            arr.push(value);
        }
        else{
            const index=arr.findIndex(x=>x===value);
            arr.splice(index,1);
        }

        switch(name){
            case 'language': setLanguage(arr); break;
            case 'gener': setGener(arr); break;
            case 'format': setFormat(arr);break;
            default: break;
        }
        setChanged(prevState=>prevState+1);
        // console.log(e);
        // console.log(e.target.name, e.target.value, e.target.checked);
    }


    //useEffect

    useEffect(()=>{
        console.log("useEffect");
        let result=[];
        const totalSongs=nowShowing;
        result=filterData(totalSongs,language,'language');
        result=filterData(result,gener,'gener');
        result=filterData(result,format,'format');
        setData(result);
    },[changed]);


    return (
        <div className="Main">
            <div className="left">
                <div>Select Language</div>
                <div>
                    <input name="language" value="Tamil" type="checkbox" onChange={onChangeHandler}/>
                    <label>Tamil</label><br/>
                    <input name="language" value="Telugu" type="checkbox" onChange={onChangeHandler}/>
                    <label>Telugu</label><br/>
                    <input name="language" value="English" type="checkbox" onChange={onChangeHandler}/>
                    <label>English</label><br/>
                </div>
                <div>Select Gener</div>
                <div>
                    <input name="gener" value="Action" type="checkbox" onChange={onChangeHandler}/>
                    <label>Action</label><br/>
                    <input name="gener" value="Comedy" type="checkbox" onChange={onChangeHandler}/>
                    <label>Comedy</label><br/>
                    <input name="gener" value="Horror" type="checkbox" onChange={onChangeHandler}/>
                    <label>Horror</label><br/>
                    <input name="gener" value="Commercial" type="checkbox" onChange={onChangeHandler}/>
                    <label>Commercial</label><br/>
                    <input name="gener" value="Disney" type="checkbox" onChange={onChangeHandler}/>
                    <label>Disney</label><br/>
                </div>
                <div>Select Formate</div>
                <div>
                    <input name="format" value="2D" type="checkbox" onChange={onChangeHandler}/>
                    <label>2D</label><br/>
                    <input name="format" value="3D" type="checkbox" onChange={onChangeHandler}/>
                    <label>3D</label><br/>
                </div>
            </div>
            <div className="right">
                {data && data.map((x,i)=>(
                <div key={i} className="song">
                    <div>{x.name}</div>
                    <div>{x.language}</div>
                    <div>{x.gener}</div>
                    <div>{x.format}</div>
                </div>))}
            </div>
        </div>
    )
}

export default Main;
