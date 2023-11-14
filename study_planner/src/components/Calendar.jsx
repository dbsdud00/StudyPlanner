import { useDispatch, useSelector } from "react-redux";
import "./Calendar.scss";
import LiForDay from "./LiForDay";
import Button from "./Button";
import { useEffect } from "react";
import { addDate, sortDate } from "../feature/calendarSlice";
import { setDate } from "../feature/dateSlice";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const Calendar = () => {
  const nowDate = { value: "2023-11-10" };
  const calendar = useSelector((state) => state.calendar);
  const date = useSelector((state) => state.date);
  const dispatch = useDispatch();
  const exDate = "2023-02-02";
  useEffect(() => {
    console.log("useEffect");
    dispatch(setDate(format(new Date(), "yyyy-MM-dd")));
    console.log(date.value);
  }, []);
  useEffect(() => {}, [date]);
  const onChangeValue = (e) => {
    dispatch(setDate(e.target.value));
  };
  const addDateBtn = () => {
    console.log("date.value : ", date.value);
    console.log("calendar : ", calendar.length == 0);
    let result = calendar.filter((cal) => cal.value == date.value);
    console.log("result : ", result.length == 0);
    if (calendar.length == 0 || result.length == 0) {
      dispatch(addDate(date.value));
      dispatch(sortDate());
    } else {
      console.log("중복날짜");
    }
  };
  const ClickDate = (e) => {
    console.log(e.target.outerText);
    dispatch(setDate(e.target.outerText));
  };
  return (
    <div className="Calendar">
      <input type="date" value={date.value} onChange={onChangeValue} />
      <Button onClick={addDateBtn}>+</Button>
      <ul className="studyDateList">
        {calendar.map((date, index) => (
          <LiForDay key={index} onClick={ClickDate}>
            <Link to={`/${date.value}`}>{date.value}</Link>
          </LiForDay>
        ))}
      </ul>
      <ul></ul>
    </div>
  );
};
export default Calendar;
