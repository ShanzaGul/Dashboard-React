import React, { Component } from 'react'
import WidgetText from './WidgetText'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

//excel import
const config = {
   apiKey: 'AIzaSyDMu-Vw30ykPPmFT3cXeunzKEi4EahzglI',
   spreadsheetId: '1vcDPrMexD8bxNwwzK9IxF8wch6Hfezq2eooJACDiqgg'
}
const url = `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId
   }/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${config.apiKey}`;


class SourceViews extends Component {

   constructor() {
      super();
      this.state = {
         items: [],
         dropdownOptions: [],
         selectedValue: null,
         organicSourceViews: null,
         directSourceViews: null,
         referralSourceViews:null,
         socialSourceViews:null,
         des:"",
      };
  }
  getData = (arg) => {

   const arr = this.state.items;
   const arrLen = arr.length;
   let organicSourceViews = 0;
   let directSourceViews = 0;
   let selectedValue = null;
   let referralSourceViews=0;
   let socialSourceViews=0;
   let des=[];
   for (let i = 0; i < arrLen; i++) {

       if (arg === arr[i]["month"]) {

           organicSourceViews = arr[i].organic_source;
           directSourceViews = arr[i].direct_source;
           referralSourceViews=arr[i].referral_source;
            socialSourceViews=arr[i].social_source;



        if(arg==="Jan 2018"){
            des[0]="";
        }else{
            if(arr[i].organic_source>arr[i-1].organic_source){
                let percentage = ((arr[i].organic_source-arr[i-1].organic_source)/arr[i-1].organic_source)*100;
                des[0]=Math.round(percentage) + "% Increased";
            }else if(arr[i].organic_source<arr[i-1].organic_source){
                let percentage = ((arr[i-1].organic_source-arr[i].organic_source)/arr[i].organic_source)*100;
                des[0]=Math.round(percentage) + "% Decresed";
            }

            if(arr[i].direct_source>arr[i-1].direct_source){
                let percentage = ((arr[i].direct_source-arr[i-1].direct_source)/arr[i-1].direct_source)*100;
                des[1]=Math.round(percentage) + "% Increased";
            }else if(arr[i].direct_source<arr[i-1].direct_source){
                let percentage = ((arr[i-1].direct_source-arr[i].direct_source)/arr[i].direct_source)*100;
                des[1]=Math.round(percentage) + "% Decresed";
            }

            if(arr[i].referral_source>arr[i-1].referral_source){
                let percentage = ((arr[i].referral_source-arr[i-1].referral_source)/arr[i-1].referral_source)*100;
                des[2]=Math.round(percentage) + "% Increased";
            }else if(arr[i].referral_source<arr[i-1].referral_source){
                let percentage =((arr[i-1].referral_source-arr[i].referral_source)/arr[i].referral_source)*100;
                des[2]=Math.round(percentage) + "% Decresed";
            }

            if(arr[i].social_source>arr[i-1].social_source){
                let percentage = ((arr[i].organic_source-arr[i-1].social_source)/arr[i-1].social_source)*100;
                des[3]=Math.round(percentage) + "% Increased";
            }else if(arr[i].social_source<arr[i-1].social_source){
                let percentage = ((arr[i-1].social_source-arr[i].social_source)/arr[i].social_source)*100;
                des[3]=Math.round(percentage) + "% Decresed";
            }

        }


          
       }
   }
   selectedValue = arg;

   this.setState({
       organicSourceViews: organicSourceViews,
       directSourceViews: directSourceViews,
       socialSourceViews:socialSourceViews,
       referralSourceViews:referralSourceViews,
       selectedValue:selectedValue,
       des:des,
   });
};

   
updateDashboard = event => {
   this.getData(event.value);
   this.setState({ selectedValue: event.value });
};

   componentDidMount(){
   
      fetch(url).then(response => response.json()).then(data =>{
         let batchRowValues = data.valueRanges[0].values;

                const rows = [];

                for (let i = 1; i < batchRowValues.length; i++) {
                    let rowObject = {};
                    for (let j = 0; j < batchRowValues[i].length; j++) {
                        rowObject[batchRowValues[0][j]] = batchRowValues[i][j];
                    }
                    rows.push(rowObject);
                }
       

                // dropdown options
                let dropdownOptions = [];

                for (let i = 0; i < rows.length; i++) {
                    dropdownOptions.push(rows[i].month);
                }

                dropdownOptions = Array.from(new Set(dropdownOptions)).reverse();


                 this.setState(
                    {
                        items: rows,
                        dropdownOptions: dropdownOptions,
                        selectedValue: "Jan 2018",
                    },
                    () => this.getData("Jan 2018")
                );


      });
      
   }



    render() {


        return (
            
            <div>
               <div className="v">
               <div className="container">
                  <div className="row">
                     <div className="col-12">
                      <div className="d-flex justify-content-lg-end justify-content-md-end justify-content-sm-center">
                         <Dropdown options={this.state.dropdownOptions} onChange={this.updateDashboard} value={this.state.selectedValue} placeholder="Select an option" />
                      </div>
                     </div>
               </div>
{/*--------------------------------------First ROW--------------------------------------------- */}

                 <div className="row mt-3">

                  <div className="col-12">
                        <div className="row">
                        <WidgetText title={"Organic Source Views"} value={this.state.organicSourceViews} des={this.state.des[0]} />
                        <WidgetText title={"Referral Source Views"} value={this.state.referralSourceViews} des={this.state.des[2]} />
                        </div>
                        <div className="row mt-3">
                        <WidgetText title={"Direct Source Views"} value={this.state.directSourceViews} des={this.state.des[1]} />
                        <WidgetText title={"Social Source Views"} value={this.state.socialSourceViews} des={this.state.des[3]} />
                        </div>
                  </div>

                 </div>

                 </div>  
                </div>
            </div>
        )
    }
}

export default SourceViews;






