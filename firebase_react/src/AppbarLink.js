import {Component} from "react";

class AppbarLink extends Component{
    render(){
        return(
            <a md-no-ink="" fb-doc-href="/docs/" target="_blank" class="fb-appbar-link md-gmp-blue-theme" href="https://firebase.google.com/docs/?authuser=0">
                Go to docs
            </a>
        );
    }
}