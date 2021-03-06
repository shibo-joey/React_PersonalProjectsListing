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
    {
      name: "React_Native",
      imagePath:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAHlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC3KG9qAAAACnRSTlMBwtgcNkiy7WaLmvln2AAAAJ9JREFUeNpjYEAGgZIGzBNFwUxVSxX3yUEgFosAQ7gKA6MDkMmawGCkDGEyCzBXNDEwGoAUqIkrChUmAUVZBDUbGRg0Jgk6MDQFhKWYJYelsmowKDMwJYgXsikwGCEzgQpEDIUdQQpY1UDaJCYlBQCtKBRXSyoUCoBa0W4AtgJosZMIxGKWBAb3EgiTQcWyxH2CE9i9QUCnJ6rCfcIMxADsLBx11Thj2wAAAABJRU5ErkJggg==",
    },
    {
      name: "Java",
      imagePath:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAQlBMVEVMaXH7/P9kmPvZKgLk5fOpx/290/6Zvf315uZ0ovuPtPzO3f17pvyAq/zmb1LcORHzuKrhVjTX5f7rhmzllYbhRiD+gj6eAAAAFnRSTlMABP7+HXJWjw7npTrWv4/hOK4pb1zGEWZj2gAAASNJREFUeNp9UYsSgyAMa6GlHaCIj///1RW2c7oby50eXkiaVIA7EPbdXiMgbPUvPRf4w2o5/rHVzyNzhKX4ouNY3heCbfult1TeH7qUqj+1u/cVZ5v9E1p8hXmQzGJ5T0tLNqTVnmXU6/CL2vhRrd3m1rf8ywENlkst3/uPfY8wvm52hYyhRDcqSIwJlOBoK0vZuXDqEaJzMa1ElPbEIorBZfykCg93Ikszzo4u4zWJmIxD0n6f3XRrxY7NfE1BMnf2Kr7aP6JyDvi1FAwNvRAStpqXxgjiOKVmztq3dBOvKmd0hjsZ4iQJVrbVRAnUo/CZjJybwkrvT6TEMT8CnQ4h98Qv2CFHTjF+iplCpgYzF2aWydpdWgGY45Rz7gZT5PWlfQJ3FwqI/KkfdgAAAABJRU5ErkJggg==",
    },
    {
      name: "Javascript",
      imagePath:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAS1BMVEVMaXFmWCZKQhu7qUKIfS3kz0rYx0f58Fb98Vbr1k3u2U4CCCsMDSsXGy0wMzFLRzRrZDqPhD22p0PDskXWxEnx3E/34lH+6FL/+VkeRa5ZAAAAC3RSTlMAHy04Xm6jvNr7/m5P7okAAADySURBVHjavZLZDoMgEEXbuiBQUGEW//9LO6NUbOzy1psYQ05muzOXf6npelHXvIWtIWIRkWlP8GoWh04lv8VcX+ltQOuwyFkcbi+xA1k8yNJwjDcr1cRbAeHm0NWyUmKBpN0JX9oavIZRmoAoT9MMmmMPbwgV83xP8oXoZ5Y3PefvJNmGswsRELZSXcE9Vxxj1hb02R/wntz7mOTxHhPmKfiZzhg1udqew/hMXltz1o4BMAEJLq3VwQhC8CODzHWXGmWwaguIHWJWUleErrZUUx0y60DF02JqXYn6uG98X8nvhf4+h/MxfTxFllP8fsh/0gPxtxv+1EQl9wAAAABJRU5ErkJggg==",
    },
    {
      name: "Node.js",
      imagePath:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAASFBMVEVMaXGRyACSwQGJwgCJyACMxgCQzACPzACR0gGKxQZiXGlpbl1wgk54lz1+qC+Duw6LxQCOywGZzTCm1E/C35LZ68Do8tn+/v3C+u8TAAAACnRSTlMAHEJqmKrL8vn+Pv8neQAAARFJREFUeNqNk4uSgyAMRau0QHjF+Fj//0/3xketWt29wzAwJySBhMdOxjnzuFJtBbL1V1i9RKhpSORVnaFxQqDgJKcIxkoDOAkLsWYX1MPvJrjZUqieCPpBlwjyrCYKvzttEZTXfj55NvC1YtecHM8LN2F/wJx4j2k+BU04ZNHtGwvcKWVwbICRuKyYSszUUPcztLDJSXGORRacQgyJ+hFqOWKTJensFxwxuB/bfuw4FHUeU0llwRE4APeD4pQVx0Kr81yEM7XDOPYIHQIuVuB7xUgSg7jrGE/JRTT9wtuzfNxbLVWY3f5RD2V73/t7ReaSVNZfFvS+HbYOhvXhaH3dit6am0b25v4b/PcT/fEFfwHqEiD9ZlxbWAAAAABJRU5ErkJggg==",
    },
    {
      name: "Python",
      imagePath:
        "data:image/png;base64,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",
    },
    {
      name: "Android",
      imagePath:
        "https://www.freepngimg.com/thumb/android/30965-6-android-file.png",
    },
    {
      name: "ComputerVision",
      imagePath:
        "https://p1.pxfuel.com/preview/1003/622/364/eyeglasses-smartphone-business-mobile-gadget-communication.jpg",
    },
    {
      name: "Arduino",
      imagePath:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Antu_arduino-icon-small.svg/512px-Antu_arduino-icon-small.svg.png",
    },
    {
      name: "Robotic Control",
      imagePath: "http://pngimg.com/uploads/robot/robot_PNG47.png",
    },
    {
      name: "FPGA",
      imagePath:
        "https://farm6.staticflickr.com/5691/30758650575_6524b6ce0b_b.jpg",
    },
    {
      name: "Paper",
      imagePath:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTVunz9O8bA3oaVqgHFSXCo64lq5h7Fn8MCvY2utQCQ1ycEGqK_&usqp=CAU",
    },
  ];

  return (
    <div className="Container">
      <div className="Items">
        {stacks.map((stack) => (
          <ListItem
            key={stack.name}
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
