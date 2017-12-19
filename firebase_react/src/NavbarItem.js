import {Component} from "react";

class NavbarItem extends Component{
    constructor(props){
        super();
        this.icon = props.icon;
        this.title = props.title;
    }
    render(){
        return(<fb-navbar-item class="develop" ng-repeat="entry in ::group.entries track by entry.name" nav-entry="::entry" fb-click="controller.navTargetClick()">
            <a class="c5e-nav-item md-gmp-blue-theme" href="/project/fir-demo-project/authentication/users" ng-class="::{'c5e-selected-entry': $ctrl.isSelected}" ng-click="$ctrl.onClick()" aria-label="Authentication">
                <div class="c5e-nav-item-lockup">
                    <i class="c5e-nav-icon gmp-icons" ng-class="::{ 'gmp-icons': $ctrl.navEntry.iconFamily == $ctrl.iconFamily.GMP, 'material-icons': $ctrl.navEntry.iconFamily == $ctrl.iconFamily.MATERIAL }">
                        {this.icon}
                    </i>
                    <span class="c5e-entry-displayname">
                        {this.title}
                    </span>
                </div>
            </a>
        </fb-navbar-item>);
    }
}