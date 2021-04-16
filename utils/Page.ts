import {TypeDef} from "@plastique/core/base/Type";
import Component from "@plastique/core/component/Component";
import Marker from "@plastique/core/component/Marker";
import EventListener from "./EventListener";

export default class Page{
    /**
     * @return remove listener action
     */
    public static waitGlobalClick(actionAfter: (event: Event) => any, ignoredComponents?: Array<Class<Component> | TypeDef<any> | Marker>): EventListener{
        return this.addSingleEventListener('mousedown', actionAfter, ignoredComponents)
    }

    /**
     * @return remove listener action
     */
    public static addSingleEventListener(eventName: string,
                                         actionAfter: (event: Event) => any,
                                         ignoredComponents: Array<Class<Component> | TypeDef<any> | Marker> = []
    ): EventListener {
        let eventListener = {
            trigger: function (event?: Event){
                actionAfter(event)
                eventListener.cancel();
            },
            cancel: function(){
                document.removeEventListener(eventName, listenerWrapper)
            }
        }
        let listenerWrapper = (event: Event) => {
            if(ignoredComponents.length == 0 || event.getClosestComponent(ignoredComponents).get() == null){
                document.removeEventListener(eventName, listenerWrapper);
                eventListener.trigger(event)
            }
        };
        document.addEventListener(eventName, listenerWrapper)
        return eventListener;
    };
}
