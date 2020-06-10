import React from "react";
import "./ListComponent.css";
import ListItem from "./ListItem";

const ListComponent = (props) => {
  const stacks = [
    {
      name: "React",
      imagePath:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAHlBMVEUiJCUkFhUPiZ8aS1USeIoWZHIfMzgLor0Ht9UB2vpKQuRdAAAAwklEQVQ4y5VTSXIEIQzT4o3/fziXSYruToaJTxRCNpZl4B9B8B1qRf31gBVRVv6agQiZIFLmE0yZfB3vFWjl65aOKsVWgRVRVMcEqzvGtHKjmqwGq9VJpkhkfMNpAtUo1moCKQKMusHEWEGmCOACEyPN6l6tDvLGVo9iAHhyus2djRHc7eqgJHhiZysIjjhrJVYSbOfH8CH54WsEa2tMj8YOsuyi+irqz0igfo7kMNCHHXy1w9FMJysejXxcg+MSPeMLy0wGeO5f3pEAAAAASUVORK5CYII=",
    },
    {
      name: "Angular",
      imagePath:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAeCAMAAADn2eWTAAAAflBMVEVMaXFUEBNKExNSEhKlJCZnFxmSISSmKSvVMDSuKy3eNDntMznJMTX+OD3+OD7LOj6zLTDhMjfdMTW6MTS1LjHjMTb///+xEhTDMDP8+PjhExe4OTviNjviIyfosbLkPkKyIybpMzjpW17wysv04+PTgoLuhof2NTvEUVLGYmIMb4bkAAAAFHRSTlMABA0hOj5Yfomtuc7a3/j6/f39/kTjRxAAAAG2SURBVHjaXZIHsqMwEERJBoEJAgkQQSba4Ptf8LcCtnenKKrQU/cExjHhunj5YZKSwFOf5vSLvJBkyyI4S6Kbaw/tPS8gWV6XZSko56xIo6+DG5D7cZQVoCxmzimlQqREOwTRPa8XkLoe5bq3nGvOuEAKJ8tLhVRM/aN5z4ybC5yK1LmPBmlp12ztwG1QFjvJAvqRds0b+KLEIaBWWnegj5ZdlEc/tH81DfCJzDZCJ6wvZ0j3R/OTmQVOMBo8QQrbvelOeGvj1Hf8/BIDrO1TXRm+NNN0kpBufTFr8aBp4jre3Wjl3jRrL4yYaRpjlIkdYgPj9TzfaGuY9bSIoaqmTXWjoutMZioiUDQMCOknIEbPtApBw7zCJFSjr9fridhM2bS4GTrKCYK67/sWwTotpqkPegPV0n6aJjEMQ4uPZzvQVO9ahrxItsqxrrE5bD5hxNT/UzuVYf77tkmJP632is+PfX+2RawXi+RLWUmJiWiqMKWDSFRRypscRzX+UIqlCT27zqgsVvtqKZ408nBuseLJUVeKQsci/2KX3g3vR4VtZ0X8YV+MJ8oWIeKbZf9xVV7yL/sDUJg4yhvLTUQAAAAASUVORK5CYII=",
    },
  ];

  return (
    <div className="Container">
      <div className="Items">
        {stacks.map((stack) => (
          <ListItem
            imagePath={stack.imagePath}
            clicked={() => props.onItemClicked(stack.name)}
          >
            {stack.name}
          </ListItem>
        ))}
      </div>
    </div>
  );
};

export default ListComponent;
