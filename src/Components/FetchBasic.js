import React from "react";

export class FetchBasic extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            jsonObj: []
        }
    }

    fetchMe = () => {
        function callApi(){
            return new Promise((resolve, reject) =>{
                let api = "https://api.jsonbin.io/b/5e0f707f56e18149ebbebf5f/2";
                fetch(api, {
                    method: "GET",
                    headers: {
                        "secret-key": "$2b$10$Vr2RAD3mpzFZ6o8bPZNlgOOM0LmFLvN24IoxlELo3arTgNszX7otS"
                    },
                }).then(
                   response => response.json()
                ).then(json => {
                    resolve(json)
                })                    
            }); 
        }

        callApi().then(result => {
            let response = [];
            // filter out blank or null
            result.map((details) =>{
                if(details.name != "" && details.name != null)
                    response.push(details);
            })
            // Sort
            response.sort((a, b) => {                
                if(a.listId == b.listId){
                    var aStr = a.name;
                    var aSub = aStr.substring(aStr.indexOf(" ") + 1);                    
                    var aNum = parseInt(aSub);

                    var bStr = b.name;
                    var bSub = bStr.substring(bStr.indexOf(" ") + 1);
                    var bNum = parseInt(bSub);
                    return aNum - bNum;
                }
                    
                return a.listId - b.listId;
            })
           

            this.setState({
                jsonObj: response
            })
        }).catch(err => {
            console.log(err);
        })
    }

    render(){
        
        return(
            <div>
                <button className="btn btn-primary" onClick={this.fetchMe}>Get Products</button>
                    <table className="table">
                        <thead>
                            <th>Id</th>
                            <th>list Id</th>
                            <th>Name</th>
                        </thead>
                        <tbody>
                            {
                                
                                this.state.jsonObj.map((details) => {
                                    return <tr>
                                        <td>{details.id}</td>
                                        <td>{details.listId}</td>
                                        <td>{details.name}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>                                                                
            </div>
        )
    }
}