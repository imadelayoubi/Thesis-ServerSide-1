"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuggestionsModule = void 0;
const common_1 = require("@nestjs/common");
const suggestions_service_1 = require("./suggestions.service");
const suggestions_controller_1 = require("./suggestions.controller");
const mongoose_1 = require("@nestjs/mongoose");
const suggestion_entity_1 = require("./entities/suggestion.entity");
let SuggestionsModule = class SuggestionsModule {
};
SuggestionsModule = __decorate([
    (0, common_1.Module)({
        providers: [suggestions_service_1.SuggestionsService],
        controllers: [suggestions_controller_1.SuggestionsController],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: suggestion_entity_1.Suggestions.name, schema: suggestion_entity_1.SuggestionsSchema },
            ]),
        ],
    })
], SuggestionsModule);
exports.SuggestionsModule = SuggestionsModule;
//# sourceMappingURL=suggestions.module.js.map