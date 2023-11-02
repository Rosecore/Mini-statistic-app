import React, { MouseEventHandler, useEffect, useState } from 'react';
import './Radial.scss'
import ValueHook from 'app/auth/hooks/ValueHook';
import { IStates } from 'pages/aboutPage/ui/aboutPage';
interface PieChartProps {
  sectorStates: IStates
  states:Function,
  sector:string,
  name:string
}
interface ISector {
  angle: number;
  radius: number;
  color: string;
  name: string;
}
const cosX = (sectorRadius: number, radius: number): number =>
  200 + sectorRadius * Math.cos(radius);
const sinY = (sectorRadius: number, radius: number): number =>
  200 + sectorRadius * Math.sin(radius);
const colors = [
  "#ffefd5",
  "#f0bb00",
  "#d2691e",
  "#ffffff"
];
const names = [
  "sum",
  "active",
  "inactive",
  "completed"
];
export const Names: Record<string, string> ={
    "sum":"Сумма",
    "active":"Активные",
    "inactive": "Неактивные",
    "completed":"Незавершенные"
}
const PieChart = ({ sectorStates, states, sector, name }: PieChartProps) => {
  const [sectors, setSectors] = useState<ISector[]>([]);
  const {active, inactive, completed} = sectorStates
  const sum = active + inactive + completed
  useEffect(() => {
    generateDiagram();
  }, []);

  const setHook = (event: Event & {
    target: HTMLElement}):void => {
    const { target } = event
    states(target.id)
   
  }
  const generateDiagram = (): void => {
    const randomValues: number[] = [];
    randomValues.push(sum)
    randomValues.push(active)
    randomValues.push(inactive)
    randomValues.push(completed)

    // Random radius between 70 and 200px
    const radiusValue = 200;

    // Calculate total random value for angle calculations
    const totalRandomValue = randomValues.reduce((acc, val) => acc + val, 0);

    // Calculate angles for each sector based on random values
    const angles = randomValues.map(
      (value) => (360 * value) / sum
    );

    // Create sector data with angles, radius, and color
    const sectorData = angles.map((angle, index) => ({
      angle,
      radius: radiusValue,
      color: colors[index],
      name: names[index]
    }));

    setSectors(sectorData);
  };

  return (
    <div className="chart-container">
      <svg
        className={"chart"}
        width="400"
        height="400"

      >
        {sectors.map((sector, index) => {
          const startAngle = sectors
            .slice(0, index)
            .reduce((acc, sector) => acc + sector.angle, 0);

          const endAngle = startAngle + sector.angle;
          const startRad = (startAngle * Math.PI) / 180;
          const endRad = (endAngle * Math.PI) / 180;

          const x1 = cosX(sector.radius, startRad);
          const y1 = sinY(sector.radius, startRad);
          const x2 = cosX(sector.radius, endRad);
          const y2 = sinY(sector.radius, endRad);

          return (
            <path
              onClick={(e: any) => setHook(e)}
              key={sector.name}
              id={sector.name}
              d={`M200,200 L${x1},${y1} A${sector.radius},${sector.radius} 0 ${sector.angle > 180 ? 1 : 0
                } 1 ${x2},${y2} Z`}
              fill={sector.color}
            />
          );
        })}
        <circle cx="200" cy="200" r="180" fill="white" />
      </svg>
      <div className = "chart-info">{name}{Names[sector]}{sectorStates.active}{}</div>
    </div>
  );
};

export default PieChart;