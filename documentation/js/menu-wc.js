'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">pco-api documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-c1cf9ca93a9386753ba1962e2de0bdc8cbb4d97de2a9ace6727275db3b4110eb6feca140814d0e8d343549a3770986f748b1db0c7d2198f9d4d65292ee9c9cf9"' : 'data-target="#xs-controllers-links-module-AppModule-c1cf9ca93a9386753ba1962e2de0bdc8cbb4d97de2a9ace6727275db3b4110eb6feca140814d0e8d343549a3770986f748b1db0c7d2198f9d4d65292ee9c9cf9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-c1cf9ca93a9386753ba1962e2de0bdc8cbb4d97de2a9ace6727275db3b4110eb6feca140814d0e8d343549a3770986f748b1db0c7d2198f9d4d65292ee9c9cf9"' :
                                            'id="xs-controllers-links-module-AppModule-c1cf9ca93a9386753ba1962e2de0bdc8cbb4d97de2a9ace6727275db3b4110eb6feca140814d0e8d343549a3770986f748b1db0c7d2198f9d4d65292ee9c9cf9"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AwsModule.html" data-type="entity-link" >AwsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AwsModule-3b94f7985d0ac5209ddd0dfbe131e369f40c928fb9d98170cd1d20d6005886a6c58ebb415a05577f69d6fa7333de5376c35eb04a13dada3070eb4a4f940b2a4f"' : 'data-target="#xs-injectables-links-module-AwsModule-3b94f7985d0ac5209ddd0dfbe131e369f40c928fb9d98170cd1d20d6005886a6c58ebb415a05577f69d6fa7333de5376c35eb04a13dada3070eb4a4f940b2a4f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AwsModule-3b94f7985d0ac5209ddd0dfbe131e369f40c928fb9d98170cd1d20d6005886a6c58ebb415a05577f69d6fa7333de5376c35eb04a13dada3070eb4a4f940b2a4f"' :
                                        'id="xs-injectables-links-module-AwsModule-3b94f7985d0ac5209ddd0dfbe131e369f40c928fb9d98170cd1d20d6005886a6c58ebb415a05577f69d6fa7333de5376c35eb04a13dada3070eb4a4f940b2a4f"' }>
                                        <li class="link">
                                            <a href="injectables/AwsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AwsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DatabaseService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabaseService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AzureModule.html" data-type="entity-link" >AzureModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AzureModule-914fc93398fd87f76ca40684cbc52440ffeffec6695a4774c577fdd80fedca054fe6b613ebc903b527840df219ffe6209be80612ea5462fb3f279b73e6c35274"' : 'data-target="#xs-injectables-links-module-AzureModule-914fc93398fd87f76ca40684cbc52440ffeffec6695a4774c577fdd80fedca054fe6b613ebc903b527840df219ffe6209be80612ea5462fb3f279b73e6c35274"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AzureModule-914fc93398fd87f76ca40684cbc52440ffeffec6695a4774c577fdd80fedca054fe6b613ebc903b527840df219ffe6209be80612ea5462fb3f279b73e6c35274"' :
                                        'id="xs-injectables-links-module-AzureModule-914fc93398fd87f76ca40684cbc52440ffeffec6695a4774c577fdd80fedca054fe6b613ebc903b527840df219ffe6209be80612ea5462fb3f279b73e6c35274"' }>
                                        <li class="link">
                                            <a href="injectables/AzureService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AzureService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DatabaseModule-3ec8cf4c7e9c0b576566c3bbe647cd18d2acd609d22e007397635be236c312e9f320af6afb2d05dbcef04a8c54376153b4d5c25f051733346873bf9657f68db5"' : 'data-target="#xs-injectables-links-module-DatabaseModule-3ec8cf4c7e9c0b576566c3bbe647cd18d2acd609d22e007397635be236c312e9f320af6afb2d05dbcef04a8c54376153b4d5c25f051733346873bf9657f68db5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DatabaseModule-3ec8cf4c7e9c0b576566c3bbe647cd18d2acd609d22e007397635be236c312e9f320af6afb2d05dbcef04a8c54376153b4d5c25f051733346873bf9657f68db5"' :
                                        'id="xs-injectables-links-module-DatabaseModule-3ec8cf4c7e9c0b576566c3bbe647cd18d2acd609d22e007397635be236c312e9f320af6afb2d05dbcef04a8c54376153b4d5c25f051733346873bf9657f68db5"' }>
                                        <li class="link">
                                            <a href="injectables/DatabaseService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabaseService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MigrationModule.html" data-type="entity-link" >MigrationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-MigrationModule-dcb7006428d46da16e53f41c4a87695b9acd0ccddb51300caa3ff1d510a32bc5d27917ca9a30ccf6da0454a5a1bee7c8520861e2afe82d6aac5776572faafb53"' : 'data-target="#xs-controllers-links-module-MigrationModule-dcb7006428d46da16e53f41c4a87695b9acd0ccddb51300caa3ff1d510a32bc5d27917ca9a30ccf6da0454a5a1bee7c8520861e2afe82d6aac5776572faafb53"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MigrationModule-dcb7006428d46da16e53f41c4a87695b9acd0ccddb51300caa3ff1d510a32bc5d27917ca9a30ccf6da0454a5a1bee7c8520861e2afe82d6aac5776572faafb53"' :
                                            'id="xs-controllers-links-module-MigrationModule-dcb7006428d46da16e53f41c4a87695b9acd0ccddb51300caa3ff1d510a32bc5d27917ca9a30ccf6da0454a5a1bee7c8520861e2afe82d6aac5776572faafb53"' }>
                                            <li class="link">
                                                <a href="controllers/MigrationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MigrationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MigrationModule-dcb7006428d46da16e53f41c4a87695b9acd0ccddb51300caa3ff1d510a32bc5d27917ca9a30ccf6da0454a5a1bee7c8520861e2afe82d6aac5776572faafb53"' : 'data-target="#xs-injectables-links-module-MigrationModule-dcb7006428d46da16e53f41c4a87695b9acd0ccddb51300caa3ff1d510a32bc5d27917ca9a30ccf6da0454a5a1bee7c8520861e2afe82d6aac5776572faafb53"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MigrationModule-dcb7006428d46da16e53f41c4a87695b9acd0ccddb51300caa3ff1d510a32bc5d27917ca9a30ccf6da0454a5a1bee7c8520861e2afe82d6aac5776572faafb53"' :
                                        'id="xs-injectables-links-module-MigrationModule-dcb7006428d46da16e53f41c4a87695b9acd0ccddb51300caa3ff1d510a32bc5d27917ca9a30ccf6da0454a5a1bee7c8520861e2afe82d6aac5776572faafb53"' }>
                                        <li class="link">
                                            <a href="injectables/MigrationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MigrationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MigrationController.html" data-type="entity-link" >MigrationController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AccountsDto.html" data-type="entity-link" >AccountsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AttributeDto.html" data-type="entity-link" >AttributeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AttributeValueDto.html" data-type="entity-link" >AttributeValueDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AutoparkDto.html" data-type="entity-link" >AutoparkDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AutoparkJobDto.html" data-type="entity-link" >AutoparkJobDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AutoparkResourcesCheckDto.html" data-type="entity-link" >AutoparkResourcesCheckDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AutoparkUpdateDto.html" data-type="entity-link" >AutoparkUpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChangeRequestAddConfigurationItemDto.html" data-type="entity-link" >ChangeRequestAddConfigurationItemDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChangeRequestConfigurationItemDto.html" data-type="entity-link" >ChangeRequestConfigurationItemDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChangeRequestDto.html" data-type="entity-link" >ChangeRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChangeRequestStatusDto.html" data-type="entity-link" >ChangeRequestStatusDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChangeRequestUpdateDto.html" data-type="entity-link" >ChangeRequestUpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CostAnomalyDto.html" data-type="entity-link" >CostAnomalyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CostTrackerDto.html" data-type="entity-link" >CostTrackerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CronJobDto.html" data-type="entity-link" >CronJobDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DataNotFoundException.html" data-type="entity-link" >DataNotFoundException</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteServiceDto.html" data-type="entity-link" >DeleteServiceDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EbsunattachedDto.html" data-type="entity-link" >EbsunattachedDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetDataDto.html" data-type="entity-link" >GetDataDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetTagDto.html" data-type="entity-link" >GetTagDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/JobIdDto.html" data-type="entity-link" >JobIdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/NewRelicEntityDto.html" data-type="entity-link" >NewRelicEntityDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrganizationDto.html" data-type="entity-link" >OrganizationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PagesDto.html" data-type="entity-link" >PagesDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginationDto.html" data-type="entity-link" >PaginationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PermissionsDto.html" data-type="entity-link" >PermissionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProcessesIdDto.html" data-type="entity-link" >ProcessesIdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProfileAvatar.html" data-type="entity-link" >ProfileAvatar</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProfileDto.html" data-type="entity-link" >ProfileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProviderDownloadDto.html" data-type="entity-link" >ProviderDownloadDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProviderDto.html" data-type="entity-link" >ProviderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProviderProcessDto.html" data-type="entity-link" >ProviderProcessDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResourceDto.html" data-type="entity-link" >ResourceDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RolesDto.html" data-type="entity-link" >RolesDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RuleConditionDto.html" data-type="entity-link" >RuleConditionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RuleConditionUpdateDto.html" data-type="entity-link" >RuleConditionUpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RuleDownloadDto.html" data-type="entity-link" >RuleDownloadDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RuleDto.html" data-type="entity-link" >RuleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RuleIdDto.html" data-type="entity-link" >RuleIdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ServiceDto.html" data-type="entity-link" >ServiceDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ServiceFetchAllDto.html" data-type="entity-link" >ServiceFetchAllDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TimeZone.html" data-type="entity-link" >TimeZone</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCronJobDto.html" data-type="entity-link" >UpdateCronJobDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRuleDto.html" data-type="entity-link" >UpdateRuleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/updateWeeklySummary.html" data-type="entity-link" >updateWeeklySummary</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserAddGroupDto.html" data-type="entity-link" >UserAddGroupDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserAddPageDto.html" data-type="entity-link" >UserAddPageDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserAddPermissionDto.html" data-type="entity-link" >UserAddPermissionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserAddRoleDto.html" data-type="entity-link" >UserAddRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserAssociatePagesDto.html" data-type="entity-link" >UserAssociatePagesDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserAssociatePermissionsDto.html" data-type="entity-link" >UserAssociatePermissionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserAssociateRolesDto.html" data-type="entity-link" >UserAssociateRolesDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserGroupHierarchyDto.html" data-type="entity-link" >UserGroupHierarchyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserQueryDto.html" data-type="entity-link" >UserQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/WeeklySummaryDto.html" data-type="entity-link" >WeeklySummaryDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AwsService.html" data-type="entity-link" >AwsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AzureService.html" data-type="entity-link" >AzureService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatabaseService.html" data-type="entity-link" >DatabaseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MigrationService.html" data-type="entity-link" >MigrationService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/cron_data_type.html" data-type="entity-link" >cron_data_type</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/group_data_type.html" data-type="entity-link" >group_data_type</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/in_built_data_type.html" data-type="entity-link" >in_built_data_type</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/JobQueue.html" data-type="entity-link" >JobQueue</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/miscellaneous_data_type.html" data-type="entity-link" >miscellaneous_data_type</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Pagination.html" data-type="entity-link" >Pagination</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/provider_data_type.html" data-type="entity-link" >provider_data_type</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/rule_data_type.html" data-type="entity-link" >rule_data_type</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/rules_type.html" data-type="entity-link" >rules_type</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/weekly_savings_data_type.html" data-type="entity-link" >weekly_savings_data_type</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});