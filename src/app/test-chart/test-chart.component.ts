import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'
@Component({
  selector: 'app-test-chart',
  templateUrl: './test-chart.component.html',
  styleUrls: ['./test-chart.component.css']
})
export class TestChartComponent implements OnInit {
  LineChart = [];
  snapshotData = [];
  values = [];
  sedaruIds = [];
  constructor() {
    this.snapshotData = [{ "AlarmCategory": "", "AlarmType": "", "DataSource": "scada", "MeasurementTime": "2018-10-31 0:11:10", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": false, "Value": "0.324188232421875" }, { "AlarmCategory": "tank flow rate", "AlarmType": "low-low", "DataSource": "scada", "MeasurementTime": "2018-10-31 0:26:17", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": true, "Value": "-3.97059631347656" }, { "AlarmCategory": "tank flow rate", "AlarmType": "low-low", "DataSource": "scada", "MeasurementTime": "2018-10-31 0:41:23", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": true, "Value": "-4.13264465332031" }, { "AlarmCategory": "tank flow rate", "AlarmType": "low-low", "DataSource": "scada", "MeasurementTime": "2018-10-31 1:41:50", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": true, "Value": "-6.23954772949219" }, { "AlarmCategory": "tank flow rate", "AlarmType": "low-low", "DataSource": "scada", "MeasurementTime": "2018-10-31 1:56:56", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": true, "Value": "-6.72564697265625" }, { "AlarmCategory": "tank flow rate", "AlarmType": "low-low", "DataSource": "scada", "MeasurementTime": "2018-10-31 4:58:22", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": true, "Value": "-3.07923889160156" }, { "AlarmCategory": "tank flow rate", "AlarmType": "high", "DataSource": "scada", "MeasurementTime": "2018-10-31 7:59:40", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": true, "Value": "4.61878967285156" }, { "AlarmCategory": "tank flow rate", "AlarmType": "high", "DataSource": "scada", "MeasurementTime": "2018-10-31 8:45:02", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": true, "Value": "3.85441131591797" }, { "AlarmCategory": "tank flow rate", "AlarmType": "low-low", "DataSource": "scada", "MeasurementTime": "2018-10-31 10:31:30", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": true, "Value": "-2.10685729980469" }, { "AlarmCategory": "tank flow rate", "AlarmType": "low-low", "DataSource": "scada", "MeasurementTime": "2018-10-31 10:36:31", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": true, "Value": "-2.10685729980469" }, { "AlarmCategory": "tank flow rate", "AlarmType": "low-low", "DataSource": "scada", "MeasurementTime": "2018-10-31 11:21:50", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": true, "Value": "-2.26895141601563" }, { "AlarmCategory": "tank flow rate", "AlarmType": "low-low", "DataSource": "scada", "MeasurementTime": "2018-10-31 11:36:57", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": true, "Value": "-3.322265625" }, { "AlarmCategory": "tank flow rate", "AlarmType": "low-low", "DataSource": "scada", "MeasurementTime": "2018-10-31 11:52:03", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": true, "Value": "-2.674072265625" }, { "AlarmCategory": "tank flow rate", "AlarmType": "low-low", "DataSource": "scada", "MeasurementTime": "2018-10-31 12:07:09", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": true, "Value": "-3.48440551757813" }, { "AlarmCategory": "tank flow rate", "AlarmType": "low-low", "DataSource": "scada", "MeasurementTime": "2018-10-31 14:28:29", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": true, "Value": "-0.567306518554688" }, { "AlarmCategory": "", "AlarmType": "", "DataSource": "scada", "MeasurementTime": "2018-10-31 14:43:35", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": false, "Value": "0.324142456054688" }, { "AlarmCategory": "tank flow rate", "AlarmType": "low-low", "DataSource": "scada", "MeasurementTime": "2018-10-31 14:58:41", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": true, "Value": "-4.57763671875E-05" }, { "AlarmCategory": "tank flow rate", "AlarmType": "low-low", "DataSource": "scada", "MeasurementTime": "2018-10-31 15:28:52", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": true, "Value": "-0.162094116210938" }, { "AlarmCategory": "", "AlarmType": "", "DataSource": "scada", "MeasurementTime": "2018-10-31 16:14:09", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": false, "Value": "0.486190795898438" }, { "AlarmCategory": "", "AlarmType": "", "DataSource": "scada", "MeasurementTime": "2018-10-31 16:29:16", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": false, "Value": "0.891311645507813" }, { "AlarmCategory": "tank flow rate", "AlarmType": "high", "DataSource": "scada", "MeasurementTime": "2018-10-31 16:44:22", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": true, "Value": "1.70164489746094" }, { "AlarmCategory": "tank flow rate", "AlarmType": "high", "DataSource": "scada", "MeasurementTime": "2018-10-31 16:59:30", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": true, "Value": "1.78262329101563" }, { "AlarmCategory": "tank flow rate", "AlarmType": "high", "DataSource": "scada", "MeasurementTime": "2018-10-31 17:29:44", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": true, "Value": "2.674072265625" }, { "AlarmCategory": "tank flow rate", "AlarmType": "high", "DataSource": "scada", "MeasurementTime": "2018-10-31 18:15:03", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": true, "Value": "3.72747802734375" }, { "AlarmCategory": "tank flow rate", "AlarmType": "high", "DataSource": "scada", "MeasurementTime": "2018-10-31 18:30:09", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": true, "Value": "3.40328979492188" }, { "AlarmCategory": "tank flow rate", "AlarmType": "high", "DataSource": "scada", "MeasurementTime": "2018-10-31 18:45:16", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": true, "Value": "3.64649963378906" }, { "AlarmCategory": "tank flow rate", "AlarmType": "high", "DataSource": "scada", "MeasurementTime": "2018-10-31 19:45:40", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": true, "Value": "2.80914306640625" }, { "AlarmCategory": "tank flow rate", "AlarmType": "high", "DataSource": "scada", "MeasurementTime": "2018-10-31 20:00:47", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": true, "Value": "3.12507400512695" }, { "AlarmCategory": "tank flow rate", "AlarmType": "high", "DataSource": "scada", "MeasurementTime": "2018-10-31 20:31:01", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": true, "Value": "3.12772135380656" }, { "AlarmCategory": "tank flow rate", "AlarmType": "high", "DataSource": "scada", "MeasurementTime": "2018-10-31 21:16:21", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": true, "Value": "3.07919332122803" }, { "AlarmCategory": "tank flow rate", "AlarmType": "high", "DataSource": "scada", "MeasurementTime": "2018-10-31 21:46:34", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": true, "Value": "2.83616638183594" }, { "AlarmCategory": "tank flow rate", "AlarmType": "high", "DataSource": "scada", "MeasurementTime": "2018-10-31 22:01:40", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": true, "Value": "2.26890563964844" }, { "AlarmCategory": "", "AlarmType": "", "DataSource": "scada", "MeasurementTime": "2018-10-31 23:32:19", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": false, "Value": "0.3240966796875" }, { "AlarmCategory": "tank flow rate", "AlarmType": "low-low", "DataSource": "scada", "MeasurementTime": "2018-10-31 23:47:27", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": true, "Value": "-0.162094116210938" }, { "AlarmCategory": "tank flow rate", "AlarmType": "low-low", "DataSource": "scada", "MeasurementTime": "2018-11-01 1:14:00", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": true, "Value": "-5.26702880859375" }, { "AlarmCategory": "tank flow rate", "AlarmType": "low-low", "DataSource": "scada", "MeasurementTime": "2018-11-01 1:29:07", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": true, "Value": "-6.23945617675781" }, { "AlarmCategory": "tank flow rate", "AlarmType": "low-low", "DataSource": "scada", "MeasurementTime": "2018-11-01 1:59:20", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": true, "Value": "-6.07736206054688" }, { "AlarmCategory": "tank flow rate", "AlarmType": "low-low", "DataSource": "scada", "MeasurementTime": "2018-11-01 2:14:27", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": true, "Value": "-6.64466857910156" }, { "AlarmCategory": "tank flow rate", "AlarmType": "low-low", "DataSource": "scada", "MeasurementTime": "2018-11-01 2:59:46", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": true, "Value": "-7.69807434082031" }, { "AlarmCategory": "tank flow rate", "AlarmType": "low-low", "DataSource": "scada", "MeasurementTime": "2018-11-01 3:14:54", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": true, "Value": "-6.56364440917969" }, { "AlarmCategory": "tank flow rate", "AlarmType": "low-low", "DataSource": "scada", "MeasurementTime": "2018-11-01 3:30:01", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": true, "Value": "-5.83433532714844" }, { "AlarmCategory": "tank flow rate", "AlarmType": "low-low", "DataSource": "scada", "MeasurementTime": "2018-11-01 3:45:08", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": true, "Value": "-3.48440551757813" }, { "AlarmCategory": "tank flow rate", "AlarmType": "low-low", "DataSource": "scada", "MeasurementTime": "2018-11-01 4:00:16", "MeasurementType": "Discharge Flow", "Quality": "100", "SedaruID": "millrockbasin_west_flowrate_label", "TriggerAsAlarm": true, "Value": "-3.8895263671875" }];
  }
  ngOnInit() {

    this.snapshotData.forEach(function (ele) {
      console.log(ele.SedaruID);
      this.sedaruIds.push(ele.MeasurementType);
    }.bind(this));
    this.snapshotData.forEach(function (ele) {
      console.log(ele.Value);
      this.values.push(ele.Value);
    }.bind(this));

    this.LineChart = new Chart('lineChart', {
      type: 'bar',
      data: {
        labels: this.sedaruIds,
        datasets: [{
          label: 'values',
          data: this.values,
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}
