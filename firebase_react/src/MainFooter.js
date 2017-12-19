import {Component} from "react";

class MainFooter extends Component{
    render(){
        return(<div class="c5e-overview-console-footer">
            <console-footer>
                <div class="c5e-footer">
                    <div md-grid="">
                        <div md-cell="12" layout="row" layout-align="center start" class="layout-align-center-start layout-row">
                            <a target="_blank" fb-doc-href="/terms" class="md-gmp-blue-theme" href="https://firebase.google.com/terms?authuser=0">
                                Terms

                            </a> &nbsp;&nbsp;·&nbsp;&nbsp;
                            <a target="_blank" href="https://www.google.com/policies/privacy/" class="md-gmp-blue-theme">Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>
            </console-footer>
        </div>);
    }
}