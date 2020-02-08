import React from "react";

export class AjaxRequest extends React.Component {
    constructor(){
        super();

        this.state = {
            jsonObj: [1,2]
        }
        
        var jsonArr = new Array();
        var ajaxRequest = () =>{            
            var xhttp = new XMLHttpRequest();
            var url = "https://api.jsonbin.io/b/5e0f707f56e18149ebbebf5f/2";
            xhttp.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    var response = JSON.parse(this.responseText);
                    var response1 = [];
                    response.map((details) => {
                        if(details.name != null && details.name != ''){
                            response1.push(details);
                        }
                    })
                    // sort
                    response1.sort(function(a, b){
                        if(a.listId == b.listId){
                            var an = a.name;
                            var aSub = an.substring(an.indexOf(' ') + 1, an.length);
                            var aInt = parseInt(aSub);

                            var bn = b.name;
                            var bSub = bn.substring(bn.indexOf(' ') + 1, bn.length);
                            var bInt = parseInt(bSub);
                            return aInt - bInt;
                        }
                        return a.listId - b.listId;
                    })
                   // console.log(response1);
                   // setStateHelper(response1);
                //    var json = JSON.parse('<json String>');
                //    var data = JSON.stringify(json);
                //    var fs = require('fs');
                //    fs.writeFile("file.json", data);
                        setStateHelper(response1);
                }
            }
            xhttp.open("GET", url);
            xhttp.setRequestHeader("secret-key", "$2b$10$Vr2RAD3mpzFZ6o8bPZNlgOOM0LmFLvN24IoxlELo3arTgNszX7otS");
            xhttp.send();
            console.log(this.state.jsonObj);            
        }
        ajaxRequest();
        
        var setStateHelper = (param) =>{
            jsonArr = param;
            this.bvar = jsonArr;
            //console.log(jsonArr);
        }

        
    }

    
    render(){
        var meObject = this.props.jsonArr;
        console.log("meObject: " + meObject);
        return(            
            <div> 
                {this.bvar}
            </div>
            
        );
    }
}