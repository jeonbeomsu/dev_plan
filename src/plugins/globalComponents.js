import { DropDown } from "../components";
import { Parallax } from "../components";
import { BaseButton } from "../components";
import { BaseTable } from "../components";
import { VPopover } from "v-tooltip";
import { BasePagination } from "../components";
import { BaseProgress } from "../components";
import { Card } from "../components";
import { StatsCard } from "../components";
/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install(Vue) {
    Vue.component("drop-down", DropDown);
    Vue.component(Parallax.name, Parallax);
    Vue.component(BaseButton.name, BaseButton);
    Vue.component(BasePagination.name, BasePagination);
    Vue.component(BaseTable.name, BaseTable);
    Vue.component(BaseProgress.name, BaseProgress);
    Vue.component(Card.name, Card);
    Vue.component(StatsCard.name, StatsCard);
    Vue.component("v-popover", VPopover);
  }
};

export default GlobalComponents;
