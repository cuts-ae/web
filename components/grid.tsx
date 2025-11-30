/**
 * Vercel-style Grid Component
 * Based on https://rauno.me/craft/vercel
 */

import * as React from "react";

interface GridProps {
  rows: number;
  columns: number;
  children?: React.ReactNode;
}

interface CrossProps {
  row: number;
  column: number;
}

function GridRoot({ rows, columns, children }: GridProps) {
  return (
    <div style={{ position: 'relative', width: `${columns * 91.2}px`, height: `${rows * 91.2}px` }}>
      {/* Background grid - full grid with all cells */}
      <div
        className="grid-system"
        style={{
          '--rows': rows,
          '--columns': columns,
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          width: `${columns * 91.2}px`,
          height: `${rows * 91.2}px`,
          border: '1px solid rgba(0,0,0,0.08)',
          borderRight: 'none',
          borderBottom: 'none',
          position: 'absolute',
          backgroundColor: 'white',
        } as React.CSSProperties}
      >
        <div style={{ display: 'contents' }}>
          {Array.from({ length: rows * columns }, (_, index) => {
            const x = (index % columns) + 1;
            const y = Math.floor(index / columns) + 1;
            return (
              <div
                key={`bg-${x}-${y}`}
                style={{
                  gridColumnStart: x,
                  gridColumnEnd: 'span 1',
                  gridRowStart: y,
                  gridRowEnd: 'span 1',
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderLeft: 'none',
                  borderTop: 'none',
                }}
              />
            );
          })}
        </div>
        {children}
      </div>

      {/* Foreground - white box covering inner cells */}
      <div
        style={{
          width: `${(columns - 2) * 91.2 - 2}px`,
          height: `${(rows - 2) * 91.2 - 2}px`,
          position: 'absolute',
          top: `92.2px`,
          left: `92.2px`,
          backgroundColor: 'white',
          zIndex: 1,
        }}
      />

    </div>
  );
}

function Cross({ row, column }: CrossProps) {
  return (
    <svg
      className="grid-cross"
      style={{
        gridRow: row,
        gridColumn: column,
        position: 'absolute',
        width: '16px',
        height: '16px',
        transform: 'translate(calc(-50% - 0.5px), calc(-50% - 0.5px))',
        pointerEvents: 'none',
        overflow: 'visible',
        zIndex: 10,
      }}
    >
      {/* Horizontal line */}
      <line
        x1="0"
        y1="8"
        x2="16"
        y2="8"
        stroke="#4D4D4D"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      {/* Vertical line */}
      <line
        x1="8"
        y1="0"
        x2="8"
        y2="16"
        stroke="#4D4D4D"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export const Grid = Object.assign(GridRoot, {
  Cross,
});
