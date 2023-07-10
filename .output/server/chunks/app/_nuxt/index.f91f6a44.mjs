import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { ref, reactive, unref, useSSRContext, mergeProps } from 'vue';
import { _ as _export_sfc } from '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _imports_0$2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAQCAYAAAAMJL+VAAAABHNCSVQICAgIfAhkiAAAADxJREFUOE9jTEtL+89AQ8BIcwto6Hiw0YyjFhAKAdoHEc1TEc0tIBSGlMrTPg4odSEh/cPABzRPRbS2AABusQ03cjsH/gAAAABJRU5ErkJggg==";
const _sfc_main$m = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "logo" }, _attrs))}>Calendar</div>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/Logo.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const Logo = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$l = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><button type="button">&lt;</button></div>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/DateView/PrevBtn.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const PrevBtn = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$k = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><button type="button">Today</button></div>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/DateView/TodayBtn.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const TodayBtn = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$j = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><button type="button">&gt;</button></div>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/DateView/NextBtn.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const NextBtn = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$i = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><button type="button">Week</button></div>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/DateView/ViewType/WeekBtn.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const WeekBtn = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$h = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><button type="button">Month</button></div>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/DateView/ViewType/MonthBtn.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const MonthBtn = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$g = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><button type="button">Year</button></div>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/DateView/ViewType/YearBtn.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const YearBtn = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$f = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="view_type_group">`);
      _push(ssrRenderComponent(WeekBtn, null, null, _parent));
      _push(ssrRenderComponent(MonthBtn, null, null, _parent));
      _push(ssrRenderComponent(YearBtn, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/DateView/ViewType/index.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = {
  __name: "index",
  __ssrInlineRender: true,
  props: ["dateInfo"],
  emits: ["goToPrevMonth", "goToNextMonth"],
  setup(__props, { emit }) {
    const monthsNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "date_view_wrap" }, _attrs))}><div class="date_view"><div class="date_info"><div>${ssrInterpolate(monthsNames[__props.dateInfo.month])}</div><div>${ssrInterpolate(__props.dateInfo.year)}</div></div><div class="date_view_btns">`);
      _push(ssrRenderComponent(PrevBtn, {
        onClick: ($event) => _ctx.$emit("prevMonth")
      }, null, _parent));
      _push(ssrRenderComponent(TodayBtn, {
        onClick: ($event) => _ctx.$emit("today")
      }, null, _parent));
      _push(ssrRenderComponent(NextBtn, {
        onClick: ($event) => _ctx.$emit("nextMonth")
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$f, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/DateView/index.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _imports_0$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABHNCSVQICAgIfAhkiAAAAi9JREFUWEftmS9swkAUxl8dqE2DBAnJDEjIAgkkmGokSEg2C2ozYJBgSLDYIcGtFgQCJEjQm4IEwfpduGUhdHm940+39CUXGspxv37vu3eXq0F27Pd70/54stuD3e7x3Y3j3R7/1TCMd+MA93ZjIKfhHwEI2rRHAS0A7j0KB6wPrwOSD6hrH19BX0EnBVarFc3nc1osFoRrRDgcpmg0SrFYTFyfI5Q8aFkWDQYDx/GDwSDl83lKpVLajK4Be72eUA6RSCQomUx+qwUlx+MxTSYTcT8ej1OpVNKCdAUolQsEAlQul0U6TwXSjgfZbrdkmial0+orKRsQ6rRaLcFTqVQc4SQwIDudDiHd+L2qJ9mAw+GQRqORSGuxWGSlrd/vi3TncjnhSZVgA7bbbVoulyz1jlWMRCJUrVZV+Phrca1WE55qNBoibZzYbDZUr9fF79FPJdgK6gBiUjWbTRU+voKeT7HnJwnKDFSED92UGaQXE+TiZQYGkoUapscK8Vuh7na7tNvtqFAoUDabVfIfOrEniRzh51KHZQ4tFAqJ2+v1Wix1aDKgHBTnzvzjJ3ENKJWEJ5HuU4G0ZjIZmk6nAloHUgkQUPDkbDY7ud3CJgFQqIPwrQ6kMiDXVLqQFwfEg+hAXgXwGBI7bmzXOHE1QAmJHQ7KE3ePeFVAjmJnKTMqA6n28RVUVU728xX87wp+/okjYJzwe/cQHR45nPQ/25d4DXGn65sz9Lfs/3jBa4gvENmdhU9lz00AAAAASUVORK5CYII=";
const _sfc_main$d = {
  __name: "Search",
  __ssrInlineRender: true,
  setup(__props) {
    const activeSearch = ref(false);
    const input_search = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["search_box", { active: unref(activeSearch) }]
      }, _attrs))}><input${ssrRenderAttr("value", unref(input_search))} placeholder="\uAC80\uC0C9\uC5B4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"><img${ssrRenderAttr("src", _imports_0$1)} alt="\uC77C\uC815 \uAC80\uC0C9 \uBC84\uD2BC"></div>`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/Search.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><button type="button" class="create_btn">Create Event</button></div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/CreateBtn.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const CreateBtn = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$4]]);
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABHNCSVQICAgIfAhkiAAABPxJREFUWEe9mEtMXFUYx8/lXZABZiBBILyGalx06cJu1MSFG5uoC+PWxGXFoLECxoVV09TWtG7cuXBjojWx7oyL6kbdWk1MdBjeSICBQR5lZnj4+99wJ8N0hnvuheEkN1zmnvN9//M9/t93jmNCjsnJyf69vb1LNTU1Tx8cHJznaeeJSZzjOCmelaqqqr9zudzP/P1+cHBwOowqJ+iiiYmJERQOAyDa1NRUy1PPu6murjaAdcXt7u4awBsAm83Nzcz29naO99T+/v6teDx+K4hOa4BY7F2UfBiNRrPnGHV1dUH0mGw2ax4wUqlULRsZ7+vru24jwBcgFruAde42NjbG2tvbI7LWSYasurKy8h9WXUbOC/39/X8dJ+9YbdPT06+z+Fp3d3dULjzNoRCYm5tLI/MtQH5RTnZZgLOzs+/jiuHOzs7oaQIrlrW4uLhGIt3s7e39qJSekgAFrqGhYRSXNlQSnCd7aWkpQ3iOYclPi/U9BFBuJQGuVdpypSyZyWTeLnb3EYBKCNz6E+auqFvLeQXjKCYvFibOEYBTU1PJnp6egSAJIfrY2toShbhUoiEKgokMHOm+2w7x5/z8fBKAcW9NHqB4DoGjHR0dEVuB6+vrBl4rOx1CN21tbaalpcVWpFleXhYFXQXkDS3KA0wmk7v8WG3Lc2SfQZCVYjjUENNWc6k2Bk/mqDiu6V2A/DDW2tr6Hjs9ZyPFz3KlZMRiMWtLptPpB6urq6OAvO0CxL3TXV1dvTbxojiDYG32cWSO3I0Oq5iUjoWFhcmBgYFBR10Jbv2D2viIjda1tTWjJ8xQPOqxGXh1u7a29nEnkUi8gWuvQ8r1NgvZmdnZ2bGZ+tAcyN+1os1QsmxsbIw6MzMz3xIfLymQbQY7MwrkMENuJhGtloq2AHlHLr5Phl3Q7mzGWQGUl2CK+w70sgA5P4q/bfApeM/ExTQQIu1/Hcpbhmyps+W/s0oS9Y14NxsY4CEFBI5DxR+eyh8L/NyVBxjUxRJcaaKWjryLgyaJt/NKlTpP/mGS/O7Q4tyhQXhZ3UfQIUsqJsvRTphmwcOgOs/Z5RsR9eVIJPIJIK2I2hOg1khcJUE0mvljpr57x9D6+nojflXbJbBBBhwIT29cEc30sfhP21InYLIai4PoM83NzW6Z887OfotV6pj7mNcsTFGC+vyahZNQjAfIph4fMkUS+ou7AOHCNyl3H5drtxRjSoqwNbjYWqpa6g/LuZ3Y3iH+rgwNDX2Wb1gBmQNxTTFhC5yqh9fO+7nG9ru8pcahGKT0kbhZ7nLcnMgD5Md3COhx3R4UKjlJafMDW6q78ZKDZvXzIwD1D4GZgO3j3qEpDCH7gSr+Xthpi5wxSIKO57w3r/hU9wQffiGjW2VqWrHAJS0oQLmYY67rary4zpXIk1jvn5IAD634Gvx1A+5qw9xB9YWaDwfrmi6NBYcxzpeFQkpefWC5cYr1B3BeMHYNBc/obnEffSMk6e1iEWUvjyDweyx6JqTOQMtgjh/I2udLLTr2+g2QdwF5KZC24JO/I+ZeLLfM9zYSkGOAvIqAU3U3VttD7mWPTkID1EJaMmX117w+V8idwY3lrjjg+ZGsfYWY02XRscPXgoWrBRQa+Arhz7L7QN0PcjKsuUdCvGoDrCzN+O3I+w6pPwXYEVx1EcWqPgLsnbxyAsRG1rH8r/y9CajfbGUXzvsfh1WccC1xXvEAAAAASUVORK5CYII=";
const _sfc_main$b = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}>reset password btn component</div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/Profile/ProfileModal/ResetPasswordBtn.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const ResetPasswordBtn = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$a = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}>delete account btn component</div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/Profile/ProfileModal/DeleteAccountBtn.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const DeleteAccountBtn = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$9 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}>sign out btn component</div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/Profile/ProfileModal/SignOutBtn.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const SignOutBtn = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$8 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "profile_modal" }, _attrs))}><div class="modal_close_btn">\xD7</div><div class="user_info"><img${ssrRenderAttr("src", _imports_0)} alt="\uD504\uB85C\uD544 \uC774\uBBF8\uC9C0"><div>user nickname</div><div>user email</div></div><div class="mypage_menu">`);
      _push(ssrRenderComponent(ResetPasswordBtn, null, null, _parent));
      _push(ssrRenderComponent(DeleteAccountBtn, null, null, _parent));
      _push(ssrRenderComponent(SignOutBtn, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/Profile/ProfileModal/index.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const modalShow = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "profile_img" }, _attrs))}><img${ssrRenderAttr("src", _imports_0)} alt="\uD504\uB85C\uD544 \uC774\uBBF8\uC9C0">`);
      if (unref(modalShow)) {
        _push(ssrRenderComponent(_sfc_main$8, {
          onModalClose: ($event) => modalShow.value = false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/Profile/index.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "index",
  __ssrInlineRender: true,
  props: ["dateInfo"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(_attrs)}><div><div class="nav_toggle_btn"><img${ssrRenderAttr("src", _imports_0$2)} alt="\uBA54\uB274\uCC3D \uD1A0\uAE00 \uBC84\uD2BC"></div>`);
      _push(ssrRenderComponent(Logo, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$e, {
        dateInfo: __props.dateInfo,
        onPrevMonth: ($event) => _ctx.$emit("prevMonth"),
        onToday: ($event) => _ctx.$emit("today"),
        onNextMonth: ($event) => _ctx.$emit("nextMonth")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$d, null, null, _parent));
      _push(ssrRenderComponent(CreateBtn, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
      _push(`</header>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/index.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><label><input type="checkbox" name="gender" value="female">Schedule</label></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Nav/Menu/item.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Item = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$4 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><form><div>My Calendar</div>`);
      _push(ssrRenderComponent(Item, null, null, _parent));
      _push(ssrRenderComponent(Item, null, null, _parent));
      _push(ssrRenderComponent(Item, null, null, _parent));
      _push(`</form></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Nav/Menu/index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`</nav>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Nav/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const dateToString = (date) => {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
};
const _sfc_main$2 = {
  __name: "Item",
  __ssrInlineRender: true,
  props: ["date", "scheduleList"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="date">${ssrInterpolate(__props.date)}</div><!--[-->`);
      ssrRenderList(__props.scheduleList, (schedule, index) => {
        _push(`<div><div>${ssrInterpolate(schedule.title)}</div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Calendar/Item.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "index",
  __ssrInlineRender: true,
  props: ["dateInfo", "prevDates"],
  setup(__props) {
    const daysArr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const scheduleList = reactive({
      "2023-1-2": [
        {
          title: "schedule"
        }
      ]
    });
    const scheduleModalShow = ref(false);
    const isEdit = ref(false);
    const createSchedule = ref(false);
    const selectedSchedule = ref([]);
    const input_edit_title = ref("");
    const input_title = ref("");
    ref({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "calendar_wrap" }, _attrs))}><div class="days_array"><!--[-->`);
      ssrRenderList(daysArr, (day, index) => {
        _push(`<div class="${ssrRenderClass({ sunday: day == "Sun" })}">${ssrInterpolate(day)}</div>`);
      });
      _push(`<!--]--></div><div class="calendar"><!--[-->`);
      ssrRenderList(__props.prevDates, (date, index) => {
        _push(ssrRenderComponent(_sfc_main$2, {
          date,
          class: "prevDays",
          onClick: ($event) => _ctx.$emit("clickOnDatePrevMonth", date)
        }, null, _parent));
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(__props.dateInfo.lastDate, (date, index) => {
        _push(ssrRenderComponent(_sfc_main$2, {
          date,
          class: { today: __props.dateInfo.date == date },
          onClick: ($event) => _ctx.$emit("clickOnDate", date),
          onDblclick: ($event) => (scheduleModalShow.value = true, createSchedule.value = true),
          onClickedSchedule: (index2) => (selectedSchedule.value = [__props.dateInfo.timeStamp, index2], scheduleModalShow.value = true),
          scheduleList: unref(scheduleList)[unref(dateToString)(new Date(__props.dateInfo.year, __props.dateInfo.month, date))]
        }, null, _parent));
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(7 - __props.dateInfo.lastDay, (date) => {
        _push(ssrRenderComponent(_sfc_main$2, {
          date,
          class: "nextDays",
          onClick: ($event) => _ctx.$emit("clickOnDateNextMonth", date)
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
      if (unref(scheduleModalShow)) {
        _push(`<div class="schedule_modal"><div class="modal_close_btn"> \xD7 </div>`);
        if (unref(isEdit)) {
          _push(`<div class="schedule_content_wrap"><input${ssrRenderAttr("value", unref(input_edit_title))} placeholder="\uC81C\uBAA9\uC744 \uC791\uC131\uD574\uC8FC\uC138\uC694"><button class="save_btn"> \uC800\uC7A5\uD558\uAE30 </button></div>`);
        } else {
          _push(`<!---->`);
        }
        if (!unref(isEdit) && unref(selectedSchedule).length && !unref(createSchedule)) {
          _push(`<div class="schedule_content_wrap"><div>${ssrInterpolate(unref(scheduleList)[unref(selectedSchedule)[0]][unref(selectedSchedule)[1]].title)}</div><div><button class="edit_btn">\uC218\uC815\uD558\uAE30</button><button class="delete_btn"> \uC0AD\uC81C\uD558\uAE30 </button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (!unref(isEdit) && unref(createSchedule)) {
          _push(`<div class="schedule_content_wrap"><input${ssrRenderAttr("value", unref(input_title))} placeholder="\uC77C\uC815 \uC81C\uBAA9\uC744 \uC791\uC131\uD574\uC8FC\uC138\uC694"><div class="time_stamp">${ssrInterpolate(__props.dateInfo.timeStamp)}</div><button class="create_btn"> \uCD94\uAC00\uD558\uAE30 </button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Calendar/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const today = ref(new Date());
    const dateInfo = reactive({
      year: today.value.getFullYear(),
      month: today.value.getMonth(),
      date: today.value.getDate(),
      timeStamp: dateToString(
        new Date(
          today.value.getFullYear(),
          today.value.getMonth(),
          today.value.getDate()
        )
      ),
      prevLastDate: new Date(
        today.value.getFullYear(),
        today.value.getMonth(),
        0
      ).getDate(),
      prevLastDay: new Date(
        today.value.getFullYear(),
        today.value.getMonth(),
        0
      ).getDay(),
      lastDate: new Date(
        today.value.getFullYear(),
        today.value.getMonth() + 1,
        0
      ).getDate(),
      lastDay: new Date(
        today.value.getFullYear(),
        today.value.getMonth() + 1,
        0
      ).getDay()
    });
    const prevDates = ref(
      Array(dateInfo.prevLastDay).fill(dateInfo.prevLastDate - dateInfo.prevLastDay + 1).map((value, index) => value + index)
    );
    const navShow = ref(true);
    const navToggle = () => {
      navShow.value = !navShow.value;
    };
    const changeToCurrentDate = (date, action) => {
      dateInfo.date = date;
      dateInfo.timeStamp = dateToString(
        new Date(dateInfo.year, dateInfo.month, date)
      );
    };
    const goToPrevMonth = (date) => {
      if (date)
        dateInfo.date = date;
      if (dateInfo.month === 0) {
        dateInfo.year -= 1;
        dateInfo.month = 11;
      } else {
        dateInfo.month -= 1;
      }
      dateInfo.timeStamp = dateToString(
        new Date(dateInfo.year, dateInfo.month, dateInfo.date)
      );
      dateInfo.prevLastDate = new Date(dateInfo.year, dateInfo.month, 0).getDate();
      dateInfo.prevLastDay = new Date(dateInfo.year, dateInfo.month, 0).getDay();
      dateInfo.lastDate = new Date(dateInfo.year, dateInfo.month + 1, 0).getDate();
      dateInfo.lastDay = new Date(dateInfo.year, dateInfo.month + 1, 0).getDay();
      prevDates.value = Array(dateInfo.prevLastDay).fill(dateInfo.prevLastDate - dateInfo.prevLastDay + 1).map((value, index) => value + index);
    };
    const goToToday = () => {
      dateInfo.year = today.value.getFullYear();
      dateInfo.month = today.value.getMonth();
      dateInfo.date = today.value.getDate();
      dateInfo.timeStamp = dateToString(
        new Date(dateInfo.year, dateInfo.month, dateInfo.date)
      );
      dateInfo.prevLastDate = new Date(dateInfo.year, dateInfo.month, 0).getDate();
      dateInfo.prevLastDay = new Date(dateInfo.year, dateInfo.month, 0).getDay();
      dateInfo.lastDate = new Date(dateInfo.year, dateInfo.month + 1, 0).getDate();
      dateInfo.lastDay = new Date(dateInfo.year, dateInfo.month + 1, 0).getDay();
      prevDates.value = Array(dateInfo.prevLastDay).fill(dateInfo.prevLastDate - dateInfo.prevLastDay + 1).map((value, index) => value + index);
    };
    const goToNextMonth = (date) => {
      if (date)
        dateInfo.date = date;
      if (dateInfo.month === 11) {
        dateInfo.month = 0;
        dateInfo.year += 1;
      } else {
        dateInfo.month += 1;
      }
      dateInfo.timeStamp = dateToString(
        new Date(dateInfo.year, dateInfo.month, dateInfo.date)
      );
      dateInfo.prevLastDate = new Date(dateInfo.year, dateInfo.month, 0).getDate();
      dateInfo.prevLastDay = new Date(dateInfo.year, dateInfo.month, 0).getDay();
      dateInfo.lastDate = new Date(dateInfo.year, dateInfo.month + 1, 0).getDate();
      dateInfo.lastDay = new Date(dateInfo.year, dateInfo.month + 1, 0).getDay();
      prevDates.value = Array(dateInfo.prevLastDay).fill(dateInfo.prevLastDate - dateInfo.prevLastDay + 1).map((value, index) => value + index);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = _sfc_main$6;
      const _component_Nav = _sfc_main$3;
      const _component_Calendar = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Header, {
        onNavToggle: navToggle,
        dateInfo: unref(dateInfo),
        onPrevMonth: ($event) => goToPrevMonth(),
        onToday: ($event) => goToToday(),
        onNextMonth: ($event) => goToNextMonth()
      }, null, _parent));
      _push(`<div class="content_wrap">`);
      if (unref(navShow)) {
        _push(ssrRenderComponent(_component_Nav, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_Calendar, {
        dateInfo: unref(dateInfo),
        prevDates: unref(prevDates),
        onClickOnDate: changeToCurrentDate,
        onClickOnDatePrevMonth: goToPrevMonth,
        onClickOnDateNextMonth: goToNextMonth
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.f91f6a44.mjs.map
