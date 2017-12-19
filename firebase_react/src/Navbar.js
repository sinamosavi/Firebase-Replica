import {Component} from "react";
import NavbarItem from "NavbarItem"

class Navbar extends Component{
    render(){
        return(
            <fb-navbar id="f" fb-on-toggle="controller.onNavBarToggle()" fb-on-nav-target-click="controller.onHideMobileNav()">
                <div class="c5e-nav">
                    <button class="c5e-nav-mobile-logo-button" type="button" ng-transclude="" ng-click="controller.goToHome()" aria-label="Go Home">
                        <div class="c5e-logo-lockup">
                            <img class="c5e-logo-lockup-icon" fb-logo="" fb-size="28" src="https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png"/>
                            <img class="c5e-logo-lockup-logotype" src="//www.gstatic.com/mobilesdk/160323_mobilesdk/images/firebase_logotype_black_18dp.svg" alt="Firebase"/>
                        </div>
                    </button>
                    <div class="c5e-nav-group c5e-nav-group-root">
                        <NavbarItem icon={"gmp_nav20_overview"} title = {"Overview"}/>
                        <md-menu class="c5e-navbar-item-settings md-menu _md c5e-navbar-item-settings-expanded" ng-if="::!!controller.settings" ng-repeat="settingsItemType in ::['expanded', 'collapsed']" ng-class="::['c5e-navbar-item-settings-' + settingsItemType]" md-offset="40 0" md-position-mode="target target">
                            <button class="md-button md-gmp-blue-theme md-ink-ripple md-icon-button" type="button">
                                <i class="c5e-nav-icon gmp-icons">
                                    gmp_nav20_settings
                                </i>
                            </button>
                        </md-menu>
                        <md-menu class="c5e-navbar-item-settings md-menu _md c5e-navbar-item-settings-collapsed" ng-if="::!!controller.settings" ng-repeat="settingsItemType in ::['expanded', 'collapsed']" ng-class="::['c5e-navbar-item-settings-' + settingsItemType]" md-offset="68 0" md-position-mode="target target">
                            <button class="md-button md-gmp-blue-theme md-ink-ripple" type="button" ng-transclude="" ng-click="$mdMenu.open($event)" aria-label="Settings" ng-class="{'c5e-selected-entry': controller.currentModuleName == controller.settings.name, 'md-icon-button': settingsItemType == 'expanded'}" aria-haspopup="true" aria-expanded="false" aria-owns="menu_container_6">
                                <i class="c5e-nav-icon gmp-icons">
                                    gmp_nav20_settings
                                </i>
                            </button>
                            <div class="_md md-open-menu-container md-whiteframe-z2" id="menu_container_6" aria-hidden="true" style={{display: 'none'}}>
                                <md-menu-content class="c5e-navbar-settings-menu-content" role="menu">
                                    <md-menu-item>
                                        <a class="md-button md-gmp-blue-theme md-ink-ripple" ng-transclude="" href="/project/fir-demo-project/settings/general/" ng-click="controller.navEntryClick(controller.settings)" role="menuitem">
                                            Project settings
                                        </a>
                                    </md-menu-item>
                                    <md-menu-divider role="separator">
                                    </md-menu-divider>
                                    <div class="fb-menu-section-header c5e-navbar-settings-menu-cloud-header">
                                        Managed in Google Cloud Console
                                    </div>
                                    <md-menu-item ng-if="!!controller.billingUrl">
                                        <a class="c5e-external-link md-button md-gmp-blue-theme md-ink-ripple" ng-transclude="" ng-href="https://console.cloud.google.com/billing/007CF4-B56D9B-5EBD0C/history?consoleUI=FIREBASE&amp;authuser=0&amp;consoleReturnUrl=https%3A%2F%2Fconsole.firebase.google.com%2Fproject%2Ffir-demo-project%2Foverview" ng-click="controller.navTargetClick()" target="_blank" role="menuitem" href="https://console.cloud.google.com/billing/007CF4-B56D9B-5EBD0C/history?consoleUI=FIREBASE&amp;authuser=0&amp;consoleReturnUrl=https%3A%2F%2Fconsole.firebase.google.com%2Fproject%2Ffir-demo-project%2Foverview">
                                            Billing
                                        </a>
                                    </md-menu-item>
                                    <md-menu-item>
                                        <a class="c5e-external-link md-button md-gmp-blue-theme md-ink-ripple" ng-transclude="" ng-href="https://console.cloud.google.com/permissions/projectpermissions?consoleUI=FIREBASE&amp;authuser=0&amp;project=fir-demo-project&amp;consoleReturnUrl=https%3A%2F%2Fconsole.firebase.google.com%2Fproject%2Ffir-demo-project%2Foverview" ng-click="controller.navTargetClick()" target="_blank" role="menuitem" href="https://console.cloud.google.com/permissions/projectpermissions?consoleUI=FIREBASE&amp;authuser=0&amp;project=fir-demo-project&amp;consoleReturnUrl=https%3A%2F%2Fconsole.firebase.google.com%2Fproject%2Ffir-demo-project%2Foverview">
                                            Users and permissions
                                        </a>
                                    </md-menu-item>
                                </md-menu-content>
                            </div>
                        </md-menu>
                    </div>
                    <div class="c5e-nav-group c5e-nav-group-top">
                        <NavbarItem icon={"gmp_nav20_analytics"} title = {"Analytics"}/>
                    </div>
                    <div class="c5e-nav-group c5e-nav-group-develop" ng-repeat="group in ::controller.navGroups track by group.groupName" ng-if="::group.entries.length > 0">
                        <div class="c5e-nav-heading">
                            develop
                        </div>
                        <NavbarItem icon={"gmp_nav20_auth"} title = {"Authentication"}/>
                        <NavbarItem icon={"gmp_nav20_database"} title = {"Database"}/>
                        <NavbarItem icon={"gmp_nav20_storage"} title = {"Storage"}/>
                        <NavbarItem icon={"gmp_nav20_hosting"} title = {"Hosting"}/>
                        <NavbarItem icon={"gmp_nav20_functions"} title = {"Functions"}/>
                        <NavbarItem icon={"gmp_nav20_test_lab"} title = {"Test Lab"}/>
                        <NavbarItem icon={"gmp_nav20_crash"} title = {"Crash Reporting"}/>
                    </div>
                    <div class="c5e-nav-group c5e-nav-group-grow" ng-repeat="group in ::controller.navGroups track by group.groupName" ng-if="::group.entries.length > 0">
                        <div class="c5e-nav-heading">grow
                        </div>
                        <NavbarItem icon={"gmp_nav20_notifications"} title = {"Notifications"}/>
                        <NavbarItem icon={"gmp_nav20_remote_config"} title = {"Remote Config"}/>
                        <NavbarItem icon={"gmp_nav20_durable_links"} title = {"Dynamic Links"}/>
                    </div>
                    <div class="c5e-nav-group c5e-nav-group-earn" ng-repeat="group in ::controller.navGroups track by group.groupName" ng-if="::group.entries.length > 0">
                        <div class="c5e-nav-heading">earn
                        </div>
                        <NavbarItem icon={"gmp_nav20_admob"} title = {"AdMob"}/>
                    </div>
                </div>
                <div class="c5e-nav-footer">
                    <fb-navbar-billing-widget>
                        <div class="c5e-nav-billing" ng-if="::controller.billingBarInfo">
                            <div layout="column" flex="" class="layout-column flex">
                                <div class="c5e-nav-billing-text">Blaze
                                </div>
                                <div class="c5e-nav-billing-details" ng-bind-html="controller.billingBarInfo.subtitle">
                                    <span>
                                        Pay as you go
                                    </span>
                                </div>

                            </div>
                            <div class="fb-role-disabled-popover-container">
                                <button class="c5e-nav-upgrade-button md-primary md-button md-gmp-blue-theme md-ink-ripple" type="button" ng-transclude="" ng-if="controller.billingBarInfo.upgradeType == controller.BillingUpgradeTypes.MODIFY" fb-role-required="owner" fb-role-disabled="popover" fb-popover-position="right" fb-popover-alignment="middle" fb-popover-text="You cannot modify this plan because you are not an owner on this project" ng-click="controller.onUpgradeBillingClick()" disabled="disabled" ng-disabled="true">
                                    <div> Modify
                                    </div>
                                </button>
                                <div class="fb-disabled-popover">
                                </div>
                            </div>
                        </div>
                    </fb-navbar-billing-widget>
                </div>
                <button class="c5e-nav-expando md-button md-gmp-blue-theme md-ink-ripple" type="button" ng-transclude="" ng-click="controller.toggleExpandState()">
                    <i class="material-icons">chevron_left
                    </i>
                </button>
            </fb-navbar>);
    }
}