"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLogger = void 0;
const common_1 = require("@nestjs/common");
class MyLogger extends common_1.ConsoleLogger {
    log(message) {
        super.log(message);
    }
    error(message, trace) {
        super.error.apply(message, trace);
    }
    warn(message) {
        super.warn(message);
    }
    debug(message) {
        super.debug(message);
    }
    verbose(message) {
        super.verbose(message);
    }
}
exports.MyLogger = MyLogger;
//# sourceMappingURL=index.js.map