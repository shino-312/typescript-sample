import * as winston from "winston";

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.splat(),
    winston.format.simple()
  ),
  transports: [
    new winston.transports.Console({
      level: "debug",
    }),
    new winston.transports.File({
      level: "info",
      filename: "combined.log",
    }),
  ],
});

const b = true;

if (b || false) {
  logger.info("true here");
} else {
  logger.info("false here");
}

while (b && true) {
  logger.info("loop");
  break;
}

const s = "hello";
logger.info(s + " world"); // hello world
logger.info(s.split("").sort().join(":")); // e:h:l:l:o
logger.info(s.includes("el")); // true
logger.info(s.indexOf("el")); // 1

switch (s) {
  case "hello":
    logger.info("In case hello");
    break;
  default:
    logger.info("In case default");
}

const x = undefined;
const y = 5;
logger.info(x ?? 0); // 0
logger.info(y ?? 0); // 5

const m = ["Alice", "Bob", "Cindy"];
for (const n of m) {
  logger.info(n); // Alice, Bob, Cindy will be shown one by one
}

for (const n in m) {
  logger.info(n); // 0, 1, 2 will be shown one by one
}

const k = [10, 20, 30];

logger.info(
  k.every((i: number) => {
    return i > 25;
  })
); // false

logger.info(
  k.some((i: number) => {
    return i > 25;
  })
); // true

logger.info(
  k.map((i: number, index: number) => {
    return i + index;
  })
); // [10, 21, 32]

logger.info(
  k.filter((i: number) => {
    return i > 15;
  })
); // [20, 30]

const hoge = { a: 1, b: 2, c: 3 };
const foo = { ...hoge, c: 4, d: 5 };
logger.info("%s", foo); // { a:1, b:2, c:4, d:5}

const funcA = (a: number, ...b: number[]) => {
  logger.info("%s", b);
};
funcA(1, 2, 3, 4, 5); // [2,3,4,5]

const p = new Map<string, number>();
p.set("Ichiro", 1);
p.set("Jiro", 2);
p.set("Saburo", 3);
logger.info(p.get("Jiro")); // 2
logger.info(p.get("Shiro")); // undefined

p.forEach((val, key) => {
  logger.info("%s: %d", key, val); // show key-value pair one by one
});

const returnPromise = (input: boolean): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (input) {
        resolve("resolved");
      } else {
        reject("rejected");
      }
    }, 1000);
  });
};

const promise = returnPromise(true);
promise
  .then((ret) => {
    logger.info(ret);
    return "My promise was " + ret;
  })
  .then((ret) => {
    logger.info(ret); // My promise was resolved
  });
