import React from 'react';

export default function Rank({name, entries}) {
  console.log(name, entries);
  return (
    <div>
        <div className="f3 white">
            {`${name}, your current rank is`}
        </div>
        <div className="f1 white">
            {entries}
        </div>
    </div>
  )
}
