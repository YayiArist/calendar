import React, { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import { getMonth } from "../util";
import PrevOrNextButtons from "./PrevOrNextButtons";
import GlobalContext from "../context/GlobalContext";

export default function SmallCalendar() {
  //tiene un estado local porque no quiero qeu afecte el caledario grande, quiero que sea
  //independiente
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  //traigo el contexto global porque el calendario chico de mueve solo pero el grande mueve los dos

  const {
    monthIndex,
    setSmallCalendarMonth,
    setMonthIndex,
    setDaySelected,
    daySelected,
  } = useContext(GlobalContext);
  //cuando se monta setea current como dependencia tiene el contexto, cuando resetea vuelve e renderizar
  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
    console.log("setea el chiquito");
  }, [currentMonthIdx]);

  useEffect(() => {
    setCurrentMonthIdx(monthIndex);
  }, [monthIndex]);

  function getDayClass(day) {
    const format = "DD-MM-YY";
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    const slcDay = daySelected && daySelected.format(format);
    if (nowDay === currDay) {
      return "bg-blue-500 rounded-full text-white";
    } else if (currDay === slcDay) {
      return "bg-blue-100 rounded-full text-blue-600 font-bold";
    } else {
      return "";
    }
  }

  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <p className="text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM YYYY")}
        </p>
        <div>
          <PrevOrNextButtons
            monthIndex={currentMonthIdx}
            setMonthIndex={setCurrentMonthIdx}
          />
        </div>
      </header>
      <div className="grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day, i) => (
          <span key={i} className="text-sm py-1 text-center">
            {day.format("dd").charAt(0)}
          </span>
        ))}
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSmallCalendarMonth(currentMonthIdx);
                  setDaySelected(day);
                }}
                className={`py-1 w-full ${getDayClass(day)}`}
              >
                <span className="text-sm">{day.format("D")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
