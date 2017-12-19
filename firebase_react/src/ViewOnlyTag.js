import {Component} from "react";

class ViewOnlyTag extends Component{
    render(){
        return(
            <div class="fb-appbar-viewonly-chip fb-appbar-viewonly-chip-desktop" ng-if="::appBar.shouldShowViewOnlyChip()">
                View only
            </div>
        );
    }
}