import CalendarGrid from "../CalendarGrid";
import Header from "../Header";
import Monitor from "../Monitor";
import moment from "moment/moment";
import styled from "styled-components";
import Title from "../Title";
import { useState } from "react";

const ShadowWrapper = styled("div")`
  border-top: 1px solid #737374;
  border-left: 1px solid #464648;
  border-right: 1px solid #464648;
  border-bottom: 2px solid #464648;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 0 1px #1a1a1a, 0 8px 20px 6px #888;
`;

function App() {
  moment.updateLocale("en", { week: { dow: 1 } });
  // const today = moment();
  const [today, setToday] = useState(moment())
  const startDay = today.clone().startOf("month").startOf("week");
  const prevHandle = () => {
    setToday(prev => prev.clone().subtract(1, 'month'))
  }
  const todayHandle = () => setToday(moment())
  const nextHandle = () => {
    setToday(next => next.clone().add(1, 'month'))
  }
  return (
    <ShadowWrapper>
      <Title />
      <Monitor
        today={today}
        prevHandle={prevHandle}
        todayHandle={todayHandle}
        nextHandle={nextHandle}
      />
      <CalendarGrid startDay={startDay} today={today} />
    </ShadowWrapper>
  );
}

export default App;
