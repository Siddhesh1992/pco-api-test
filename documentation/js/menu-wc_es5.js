'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);
  var _super = _createSuper(_class);
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }
  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">pco-api documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-AppModule-c1cf9ca93a9386753ba1962e2de0bdc8cbb4d97de2a9ace6727275db3b4110eb6feca140814d0e8d343549a3770986f748b1db0c7d2198f9d4d65292ee9c9cf9"' : 'data-target="#xs-controllers-links-module-AppModule-c1cf9ca93a9386753ba1962e2de0bdc8cbb4d97de2a9ace6727275db3b4110eb6feca140814d0e8d343549a3770986f748b1db0c7d2198f9d4d65292ee9c9cf9"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-AppModule-c1cf9ca93a9386753ba1962e2de0bdc8cbb4d97de2a9ace6727275db3b4110eb6feca140814d0e8d343549a3770986f748b1db0c7d2198f9d4d65292ee9c9cf9"' : 'id="xs-controllers-links-module-AppModule-c1cf9ca93a9386753ba1962e2de0bdc8cbb4d97de2a9ace6727275db3b4110eb6feca140814d0e8d343549a3770986f748b1db0c7d2198f9d4d65292ee9c9cf9"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/AppController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AwsModule.html\" data-type=\"entity-link\" >AwsModule</a>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-AwsModule-3b94f7985d0ac5209ddd0dfbe131e369f40c928fb9d98170cd1d20d6005886a6c58ebb415a05577f69d6fa7333de5376c35eb04a13dada3070eb4a4f940b2a4f"' : 'data-target="#xs-injectables-links-module-AwsModule-3b94f7985d0ac5209ddd0dfbe131e369f40c928fb9d98170cd1d20d6005886a6c58ebb415a05577f69d6fa7333de5376c35eb04a13dada3070eb4a4f940b2a4f"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-AwsModule-3b94f7985d0ac5209ddd0dfbe131e369f40c928fb9d98170cd1d20d6005886a6c58ebb415a05577f69d6fa7333de5376c35eb04a13dada3070eb4a4f940b2a4f"' : 'id="xs-injectables-links-module-AwsModule-3b94f7985d0ac5209ddd0dfbe131e369f40c928fb9d98170cd1d20d6005886a6c58ebb415a05577f69d6fa7333de5376c35eb04a13dada3070eb4a4f940b2a4f"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/AwsService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AwsService</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/DatabaseService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DatabaseService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AzureModule.html\" data-type=\"entity-link\" >AzureModule</a>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-AzureModule-914fc93398fd87f76ca40684cbc52440ffeffec6695a4774c577fdd80fedca054fe6b613ebc903b527840df219ffe6209be80612ea5462fb3f279b73e6c35274"' : 'data-target="#xs-injectables-links-module-AzureModule-914fc93398fd87f76ca40684cbc52440ffeffec6695a4774c577fdd80fedca054fe6b613ebc903b527840df219ffe6209be80612ea5462fb3f279b73e6c35274"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-AzureModule-914fc93398fd87f76ca40684cbc52440ffeffec6695a4774c577fdd80fedca054fe6b613ebc903b527840df219ffe6209be80612ea5462fb3f279b73e6c35274"' : 'id="xs-injectables-links-module-AzureModule-914fc93398fd87f76ca40684cbc52440ffeffec6695a4774c577fdd80fedca054fe6b613ebc903b527840df219ffe6209be80612ea5462fb3f279b73e6c35274"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/AzureService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AzureService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/DatabaseModule.html\" data-type=\"entity-link\" >DatabaseModule</a>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-DatabaseModule-3ec8cf4c7e9c0b576566c3bbe647cd18d2acd609d22e007397635be236c312e9f320af6afb2d05dbcef04a8c54376153b4d5c25f051733346873bf9657f68db5"' : 'data-target="#xs-injectables-links-module-DatabaseModule-3ec8cf4c7e9c0b576566c3bbe647cd18d2acd609d22e007397635be236c312e9f320af6afb2d05dbcef04a8c54376153b4d5c25f051733346873bf9657f68db5"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-DatabaseModule-3ec8cf4c7e9c0b576566c3bbe647cd18d2acd609d22e007397635be236c312e9f320af6afb2d05dbcef04a8c54376153b4d5c25f051733346873bf9657f68db5"' : 'id="xs-injectables-links-module-DatabaseModule-3ec8cf4c7e9c0b576566c3bbe647cd18d2acd609d22e007397635be236c312e9f320af6afb2d05dbcef04a8c54376153b4d5c25f051733346873bf9657f68db5"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/DatabaseService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DatabaseService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/MigrationModule.html\" data-type=\"entity-link\" >MigrationModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-MigrationModule-dcb7006428d46da16e53f41c4a87695b9acd0ccddb51300caa3ff1d510a32bc5d27917ca9a30ccf6da0454a5a1bee7c8520861e2afe82d6aac5776572faafb53"' : 'data-target="#xs-controllers-links-module-MigrationModule-dcb7006428d46da16e53f41c4a87695b9acd0ccddb51300caa3ff1d510a32bc5d27917ca9a30ccf6da0454a5a1bee7c8520861e2afe82d6aac5776572faafb53"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-MigrationModule-dcb7006428d46da16e53f41c4a87695b9acd0ccddb51300caa3ff1d510a32bc5d27917ca9a30ccf6da0454a5a1bee7c8520861e2afe82d6aac5776572faafb53"' : 'id="xs-controllers-links-module-MigrationModule-dcb7006428d46da16e53f41c4a87695b9acd0ccddb51300caa3ff1d510a32bc5d27917ca9a30ccf6da0454a5a1bee7c8520861e2afe82d6aac5776572faafb53"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/MigrationController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >MigrationController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-MigrationModule-dcb7006428d46da16e53f41c4a87695b9acd0ccddb51300caa3ff1d510a32bc5d27917ca9a30ccf6da0454a5a1bee7c8520861e2afe82d6aac5776572faafb53"' : 'data-target="#xs-injectables-links-module-MigrationModule-dcb7006428d46da16e53f41c4a87695b9acd0ccddb51300caa3ff1d510a32bc5d27917ca9a30ccf6da0454a5a1bee7c8520861e2afe82d6aac5776572faafb53"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-MigrationModule-dcb7006428d46da16e53f41c4a87695b9acd0ccddb51300caa3ff1d510a32bc5d27917ca9a30ccf6da0454a5a1bee7c8520861e2afe82d6aac5776572faafb53"' : 'id="xs-injectables-links-module-MigrationModule-dcb7006428d46da16e53f41c4a87695b9acd0ccddb51300caa3ff1d510a32bc5d27917ca9a30ccf6da0454a5a1bee7c8520861e2afe82d6aac5776572faafb53"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/MigrationService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >MigrationService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                </ul>\n                </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links"' : 'data-target="#xs-controllers-links"', ">\n                                <span class=\"icon ion-md-swap\"></span>\n                                <span>Controllers</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"controllers/AppController.html\" data-type=\"entity-link\" >AppController</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"controllers/MigrationController.html\" data-type=\"entity-link\" >MigrationController</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/AccountsDto.html\" data-type=\"entity-link\" >AccountsDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/AttributeDto.html\" data-type=\"entity-link\" >AttributeDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/AttributeValueDto.html\" data-type=\"entity-link\" >AttributeValueDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/AutoparkDto.html\" data-type=\"entity-link\" >AutoparkDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/AutoparkJobDto.html\" data-type=\"entity-link\" >AutoparkJobDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/AutoparkResourcesCheckDto.html\" data-type=\"entity-link\" >AutoparkResourcesCheckDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/AutoparkUpdateDto.html\" data-type=\"entity-link\" >AutoparkUpdateDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ChangeRequestAddConfigurationItemDto.html\" data-type=\"entity-link\" >ChangeRequestAddConfigurationItemDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ChangeRequestConfigurationItemDto.html\" data-type=\"entity-link\" >ChangeRequestConfigurationItemDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ChangeRequestDto.html\" data-type=\"entity-link\" >ChangeRequestDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ChangeRequestStatusDto.html\" data-type=\"entity-link\" >ChangeRequestStatusDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ChangeRequestUpdateDto.html\" data-type=\"entity-link\" >ChangeRequestUpdateDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CostAnomalyDto.html\" data-type=\"entity-link\" >CostAnomalyDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CostTrackerDto.html\" data-type=\"entity-link\" >CostTrackerDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CronJobDto.html\" data-type=\"entity-link\" >CronJobDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/DataNotFoundException.html\" data-type=\"entity-link\" >DataNotFoundException</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/DeleteServiceDto.html\" data-type=\"entity-link\" >DeleteServiceDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/EbsunattachedDto.html\" data-type=\"entity-link\" >EbsunattachedDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/GetDataDto.html\" data-type=\"entity-link\" >GetDataDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/GetTagDto.html\" data-type=\"entity-link\" >GetTagDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/JobIdDto.html\" data-type=\"entity-link\" >JobIdDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/NewRelicEntityDto.html\" data-type=\"entity-link\" >NewRelicEntityDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/OrganizationDto.html\" data-type=\"entity-link\" >OrganizationDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PagesDto.html\" data-type=\"entity-link\" >PagesDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PaginationDto.html\" data-type=\"entity-link\" >PaginationDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PermissionsDto.html\" data-type=\"entity-link\" >PermissionsDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ProcessesIdDto.html\" data-type=\"entity-link\" >ProcessesIdDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ProfileAvatar.html\" data-type=\"entity-link\" >ProfileAvatar</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ProfileDto.html\" data-type=\"entity-link\" >ProfileDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ProviderDownloadDto.html\" data-type=\"entity-link\" >ProviderDownloadDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ProviderDto.html\" data-type=\"entity-link\" >ProviderDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ProviderProcessDto.html\" data-type=\"entity-link\" >ProviderProcessDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ResourceDto.html\" data-type=\"entity-link\" >ResourceDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/RolesDto.html\" data-type=\"entity-link\" >RolesDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/RuleConditionDto.html\" data-type=\"entity-link\" >RuleConditionDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/RuleConditionUpdateDto.html\" data-type=\"entity-link\" >RuleConditionUpdateDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/RuleDownloadDto.html\" data-type=\"entity-link\" >RuleDownloadDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/RuleDto.html\" data-type=\"entity-link\" >RuleDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/RuleIdDto.html\" data-type=\"entity-link\" >RuleIdDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ServiceDto.html\" data-type=\"entity-link\" >ServiceDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ServiceFetchAllDto.html\" data-type=\"entity-link\" >ServiceFetchAllDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/TimeZone.html\" data-type=\"entity-link\" >TimeZone</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdateCronJobDto.html\" data-type=\"entity-link\" >UpdateCronJobDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdateRuleDto.html\" data-type=\"entity-link\" >UpdateRuleDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/updateWeeklySummary.html\" data-type=\"entity-link\" >updateWeeklySummary</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UserAddGroupDto.html\" data-type=\"entity-link\" >UserAddGroupDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UserAddPageDto.html\" data-type=\"entity-link\" >UserAddPageDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UserAddPermissionDto.html\" data-type=\"entity-link\" >UserAddPermissionDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UserAddRoleDto.html\" data-type=\"entity-link\" >UserAddRoleDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UserAssociatePagesDto.html\" data-type=\"entity-link\" >UserAssociatePagesDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UserAssociatePermissionsDto.html\" data-type=\"entity-link\" >UserAssociatePermissionsDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UserAssociateRolesDto.html\" data-type=\"entity-link\" >UserAssociateRolesDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UserGroupHierarchyDto.html\" data-type=\"entity-link\" >UserGroupHierarchyDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UserQueryDto.html\" data-type=\"entity-link\" >UserQueryDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/WeeklySummaryDto.html\" data-type=\"entity-link\" >WeeklySummaryDto</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/AppService.html\" data-type=\"entity-link\" >AppService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/AwsService.html\" data-type=\"entity-link\" >AwsService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/AzureService.html\" data-type=\"entity-link\" >AzureService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/DatabaseService.html\" data-type=\"entity-link\" >DatabaseService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/MigrationService.html\" data-type=\"entity-link\" >MigrationService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#guards-links"' : 'data-target="#xs-guards-links"', ">\n                            <span class=\"icon ion-ios-lock\"></span>\n                            <span>Guards</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"', ">\n                            <li class=\"link\">\n                                <a href=\"guards/AuthGuard.html\" data-type=\"entity-link\" >AuthGuard</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/cron_data_type.html\" data-type=\"entity-link\" >cron_data_type</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/group_data_type.html\" data-type=\"entity-link\" >group_data_type</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/in_built_data_type.html\" data-type=\"entity-link\" >in_built_data_type</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/JobQueue.html\" data-type=\"entity-link\" >JobQueue</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/miscellaneous_data_type.html\" data-type=\"entity-link\" >miscellaneous_data_type</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Pagination.html\" data-type=\"entity-link\" >Pagination</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/provider_data_type.html\" data-type=\"entity-link\" >provider_data_type</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/rule_data_type.html\" data-type=\"entity-link\" >rule_data_type</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/rules_type.html\" data-type=\"entity-link\" >rules_type</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/weekly_savings_data_type.html\" data-type=\"entity-link\" >weekly_savings_data_type</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/enumerations.html\" data-type=\"entity-link\">Enums</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">Functions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/typealiases.html\" data-type=\"entity-link\">Type aliases</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);
  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));