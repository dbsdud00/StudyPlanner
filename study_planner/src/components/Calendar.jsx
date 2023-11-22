import { useDispatch, useSelector } from "react-redux";
import "./Calendar.scss";
import LiForDay from "./LiForDay";
import Button from "./Button";
import { useEffect } from "react";
import { addDate, sortDate } from "../feature/calendarSlice";
import { setDate } from "../feature/dateSlice";
import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";

const Calendar = () => {
  const navigate = useNavigate();
  const calendar = useSelector((state) => state.calendar);
  const date = useSelector((state) => state.date);
  const dispatch = useDispatch();
  const addDateAndNavigate = (goalDate) => {
    console.log("navigateDate");
    let result = calendar.filter((cal) => cal.value == goalDate);
    console.log("result : ", result.length == 0);
    if (calendar.length == 0 || result.length == 0) {
      dispatch(addDate(goalDate));
      dispatch(sortDate());
      navigate(`/${goalDate}`);
    } else {
      console.log("날짜중복");
    }
  };
  useEffect(() => {
    console.log("useEffect");
    const todayDate = format(new Date(), "yyyy-MM-dd");
    addDateAndNavigate(todayDate);
    console.log("useEffect 끝");
  }, [0]);
  const onChangeValue = (e) => {
    dispatch(setDate(e.target.value));
  };

  const ClickDate = (e) => {
    console.log(e.target.outerText);
    navigate(`/${e.target.outerText}`);
    dispatch(setDate(e.target.outerText));
  };
  return (
    <div className="Calendar">
      <input type="date" value={date.value} onChange={onChangeValue} />
      <Button onClick={() => addDateAndNavigate(date.value)}>+</Button>
      <ul className="studyDateList">
        {calendar.map((date, index) => (
          <LiForDay key={index} onClick={ClickDate}>
            {date.value}
          </LiForDay>
        ))}
      </ul>
      <ul></ul>
    </div>
  );
};
export default Calendar;
