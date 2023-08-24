import React, { useState } from 'react';
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop
} from '@syncfusion/ej2-react-schedule';

import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

import { scheduleData } from '../data/dummy';
import { Header } from '../components';

const PropertyPane = (props) => <div className="mt-5">{props.children}</div>;

const Scheduler = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onDragStart = (arg) => {
    arg.navigation.enable = true;
  };

  const handleDateChange = (args) => {
    setSelectedDate(args.value);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header
        category="App"
        title="Calendar"
      />
      <ScheduleComponent
        height="650px"
        selectedDate={selectedDate}
        eventSettings={{ dataSource: scheduleData }}
        dragStart={onDragStart}
      >
        <ViewsDirective>
          {[
            'Day',
            'Week',
            'WorkWeek',
            'Month',
            'Agenda'].map((item) => (
              <ViewDirective
                key={item}
                option={item}
              />
            ))}
        </ViewsDirective>
        <Inject services={[
          Day,
          Week,
          WorkWeek,
          Month,
          Agenda,
          Resize,
          DragAndDrop
        ]} />
      </ScheduleComponent>
      <PropertyPane>
        <table style={{ width: '100%', background: 'white' }}>
          <tbody>
            <tr style={{ height: '50px' }}>
              <td style={{ width: '100%' }}>
                <DatePickerComponent
                  value={selectedDate}
                  showClearButton={false}
                  placeholder="Current Date"
                  floatLabelType="Always"
                  change={handleDateChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </PropertyPane>
    </div>
  );
};

export default Scheduler;
