import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from '../home/home.service';
import { StateData} from 'src/app/home/home.interface';
import { GoogleChartInterface } from 'ng2-google-charts';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {
  @ViewChild('mychart1 ', {static: false}) mychart1:any;
  @ViewChild('mychart2 ', {static: false}) mychart2:any;

  public districtWiseData:any;
  public totalConfirmed=0;
  public totalActive=0;
  public totalDeath=0;
  public totalRecovered=0;
  public stateConfirmed:any[] = [["State","Confirmed Cases"]];
  public database:any[]=[];
  public stateActive:any[] = [["State","Confirmed Cases"]];
  public stateDeath:any[] = [["State","Confirmed Cases"]];
  public stateRecovered:any[] = [["State","Confirmed Cases"]];



  public pieChart: GoogleChartInterface = {
    chartType: 'PieChart',
  };

  public ColumnChart: GoogleChartInterface = {
    chartType: 'ColumnChart',
  };

  constructor(private dataservice:HomeService) { }

  ngOnInit(): void {
    this.getDistrictWiseData();
    //  this.initChart();
  }

  public getDistrictWiseData(): void {
    this.dataservice.getDistrictWiseData().subscribe((data) => {
      if (data !== null) {
        this.districtWiseData = data;
        this.transformDistrictWiseData(this.districtWiseData);
      }
    }, (error) => {
      console.log(error);
    });
  }


  transformDistrictWiseData(districtWiseData): void {
    for (const [key, value] of Object.entries(districtWiseData)) {
      var tempconfirmed=0;
      var tempactive=0;
      var temprecovered=0;
      var tempdeath=0;
      for (const [key1, value1] of Object.entries(value)) {
        for (const [key2, value2] of Object.entries(value1)) {
          if (key1 !== 'statecode') {
          this.totalConfirmed=this.totalConfirmed+value2['confirmed'];
          this.totalDeath+=value2['deceased'];
          this.totalRecovered+=value2['recovered'];
          this.totalActive+=value2['active'];
          tempconfirmed+=value2['confirmed'];
          tempactive+=value2['active'];
          tempdeath+=value2['deceased'];
          temprecovered+=value2['recovered'];
          }
        }
      }
      this.stateConfirmed.push([key,tempconfirmed]);
      this.stateActive.push([key,tempactive]);
      this.stateDeath.push([key,tempdeath]);
      this.stateRecovered.push([key,temprecovered]);
    }
    this.initChart('c');
  }


  initChart(caseType:string){

  if(caseType=='c')
    this.database=this.stateConfirmed;
  if(caseType=='a')
    this.database=this.stateActive;
  if(caseType=='r')
    this.database=this.stateRecovered;
  if(caseType=='d')
    this.database=this.stateDeath;



    this.pieChart={
      chartType: 'PieChart',
      // dataTable: this.database,
      dataTable:this.database,
      //firstRowIsData: true,
       options: {
        backgroundColor: '#f1f8e9',
        width: 1200,
        height:500,           
        },
    
    };
    this.ColumnChart={
      chartType: 'ColumnChart',
      // dataTable: this.database,
      dataTable:this.database,
      //firstRowIsData: true,
        options: {
          height:500,
          width:1200
        },
      };

    console.log(this.pieChart.dataTable);
  }


  updateChart(input:HTMLInputElement){
    // console.log(input.value);
    this.initChart(input.value);
    this.mychart1.draw();
    this.mychart2.draw();

  }
}