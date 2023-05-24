/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable jsx-a11y/alt-text */
import React, { FC } from 'react';
import './request.css';
import { BallsIcon } from '../../ui/icons/balls-icon';
import { CalendarIcon } from '../../ui/icons/calendar-icon';
import { LocationIcon } from '../../ui/icons/location-icon';
import { ClockIcon } from '../../ui/icons/clock-icon';
import { Button } from '../../ui/button/button';

interface RequestProps {
  date: Date;
  location: string;
  header: string;
  text: string;
  avatar: string;
  name: string;
  phone: string;
  offers: number;
}

const onButtonClick = (event: any) => {
  if (event.target.innerHTML === 'Читать') {
    event.target.innerHTML = 'Свернуть';
    document.getElementById('conttext')!.className = 'contenttextshow';
  } else {
    event.target.innerHTML = 'Читать';
    document.getElementById('conttext')!.className = 'contenttext';
  }
};

export const Request: FC<RequestProps> = ({ ...props }) => {
  return (
    <>
      <div className="request">
        <div className="buttons">
          <Button
            type="quadrilateralExit"
            disabled={false}
            children=""
            onClick={() => {
              console.log('hello');
            }}
          />
          <Button
            type="quadrilateralApprove"
            disabled={false}
            children=""
            onClick={() => {
              console.log('hello');
            }}
          />
          <Button
            type="quadrilateralEdit"
            disabled={false}
            children=""
            onClick={() => {
              console.log('hello');
            }}
          />
        </div>
        <div className="volunteer">
          <div className="volunteerinfo">
            <img className="avatar" src={props.avatar} />
            <div className="infotext">
              <p className="text">{props.name}</p>
              <p className="teltext">{props.phone}</p>
            </div>
          </div>
          <div className="icons">
            <Button
              type="circleSmallPhone"
              disabled={false}
              children=""
              onClick={() => {
                console.log('hello');
              }}
            />
            <Button
              type="circleSmallEmail"
              disabled={false}
              children=""
              onClick={() => {
                console.log('hello');
              }}
            />
          </div>
        </div>
        <div className="content">
          <h1 className="contentheader">{props.header}</h1>
          <div className="contenttext" id="conttext">
            {props.text}
          </div>
          <button className="contenthide" onClick={onButtonClick}>
            Читать
          </button>
          <div className="requestcount">
            <BallsIcon color="dark-blue" />
            <div>{props.offers}</div>
          </div>
        </div>
        <div className="category">
          <div className="categorylogo">
            <p className="logotext">Категория</p>
          </div>
          <div className="date">
            <CalendarIcon className="dateicon" color="dark-blue" />
            <p className="datetext">{props.date.getFullYear()}</p>
          </div>
          <div className="time">
            <ClockIcon className="timeicon" color="dark-blue" />
            <p className="timetext">{props.date.getHours()}</p>
          </div>
          <div className="address">
            <div>
              <LocationIcon className="addressicon" color="dark-blue" />
            </div>
            <p className="addresstext">{props.location}</p>
          </div>
        </div>
      </div>
    </>
  );
};
