!function(){try{var n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e=(new Error).stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="c6632ae7-f8ee-4e17-9bd2-a361b0fa048a",n._sentryDebugIdIdentifier="sentry-dbid-c6632ae7-f8ee-4e17-9bd2-a361b0fa048a")}catch(n){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"3.5.6"},(globalThis.webpackChunk_nordvpn_browser_extensions=globalThis.webpackChunk_nordvpn_browser_extensions||[]).push([[459],{92459:(n,e,t)=>{t.a(n,(async(o,r)=>{try{t.d(e,{$6l:()=>_n,$7p:()=>Q,$Li:()=>be,$tC:()=>Gn,$zw:()=>F,AV9:()=>nn,Ang:()=>Xe,CJC:()=>Wn,D3e:()=>on,DIc:()=>ae,DIw:()=>P,D_W:()=>me,DiM:()=>ot,EWe:()=>X,EwE:()=>pt,FCB:()=>Je,FHP:()=>$e,FRe:()=>hn,Fpd:()=>tn,Gi8:()=>W,HV$:()=>y,I1w:()=>Nn,J4V:()=>an,JoP:()=>j,KFb:()=>dn,KWu:()=>Sn,LaQ:()=>vn,M19:()=>te,MF_:()=>L,MHx:()=>R,NIv:()=>An,NWt:()=>Le,Ngr:()=>Se,Niw:()=>he,Nko:()=>_e,Nme:()=>E,Nn6:()=>Zn,Ny2:()=>Fn,OH8:()=>Ke,Or8:()=>Oe,QM7:()=>In,QQv:()=>Ze,QT3:()=>ce,Q_e:()=>wn,Qlp:()=>_t,R$I:()=>cn,R3W:()=>G,RMz:()=>en,Rpm:()=>S,S94:()=>nt,Sne:()=>ge,Sx$:()=>$n,TGv:()=>mn,TPR:()=>Te,Tdp:()=>x,TiW:()=>w,U0D:()=>rt,VDL:()=>Ce,Vvw:()=>A,WlW:()=>oe,XOl:()=>kn,XP4:()=>we,YOt:()=>et,YaT:()=>yn,ZD9:()=>b,ZDp:()=>En,ZOv:()=>Y,ZqR:()=>K,Zxz:()=>sn,Zzy:()=>xe,_n7:()=>qe,a0B:()=>Un,a0l:()=>$,a5_:()=>On,bJN:()=>Mn,bjU:()=>ke,cb8:()=>gn,crw:()=>le,d5k:()=>xn,dGJ:()=>Vn,eHk:()=>rn,eYF:()=>ue,eaI:()=>pe,edv:()=>k,ern:()=>Cn,exY:()=>re,f1i:()=>pn,f5q:()=>ie,fP1:()=>De,fgu:()=>H,gWb:()=>ye,goM:()=>de,h4u:()=>ee,hHs:()=>fn,hOS:()=>Xn,i4I:()=>zn,iFQ:()=>Tn,ibT:()=>Ae,il4:()=>Pn,jeM:()=>ln,jfu:()=>C,jpb:()=>Ve,jqT:()=>tt,kHX:()=>Pe,lBI:()=>Ue,m6R:()=>m,m_1:()=>se,mnf:()=>Jn,mrH:()=>g,nI7:()=>Ye,nV5:()=>B,nb6:()=>D,noD:()=>Dn,nw$:()=>Hn,o$X:()=>ve,oHO:()=>Re,oSZ:()=>O,pT7:()=>ne,piQ:()=>jn,qT:()=>q,r7L:()=>qn,reo:()=>Qn,s53:()=>f,syD:()=>Bn,tJf:()=>un,tNG:()=>I,tQb:()=>Rn,uL5:()=>Ln,ug$:()=>Yn,uhX:()=>Ie,usV:()=>bn,v5o:()=>U,vCR:()=>N,vdw:()=>T,vsr:()=>V,vvo:()=>J,wJ_:()=>Ne,w_6:()=>h,wtP:()=>Ge,yBo:()=>fe,z3U:()=>M,z7$:()=>s,zbV:()=>z,zqD:()=>Z});var p=t(19800);n=t.hmd(n);var _=o([p]);p=(_.then?(await _)():_)[0];const Ee=new Array(32).fill(void 0);function a(n){return Ee[n]}Ee.push(void 0,null,!0,!1);let ze=Ee.length;function c(n){const e=a(n);return function(n){n<36||(Ee[n]=ze,ze=n)}(n),e}function i(n){ze===Ee.length&&Ee.push(Ee.length+1);const e=ze;return ze=Ee[e],Ee[e]=n,e}let Me=new("undefined"==typeof TextDecoder?(0,n.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});Me.decode();let We=new Uint8Array;function u(){return 0===We.byteLength&&(We=new Uint8Array(p.memory.buffer)),We}function d(n,e){return Me.decode(u().subarray(n,n+e))}function l(n){return null==n}let je=new Float64Array;let Be=new Int32Array;let Qe=0;let Fe=new("undefined"==typeof TextEncoder?(0,n.require)("util").TextEncoder:TextEncoder)("utf-8");const He="function"==typeof Fe.encodeInto?function(n,e){return Fe.encodeInto(n,e)}:function(n,e){const t=Fe.encode(n);return e.set(t),{read:n.length,written:t.length}};function v(n,e,t){if(void 0===t){const t=Fe.encode(n),o=e(t.length);return u().subarray(o,o+t.length).set(t),Qe=t.length,o}let o=n.length,r=e(o);const p=u();let _=0;for(;_<o;_++){const e=n.charCodeAt(_);if(e>127)break;p[r+_]=e}if(_!==o){0!==_&&(n=n.slice(_)),r=t(r,o,o=_+3*n.length);const e=u().subarray(r+_,r+o);_+=He(n,e).written}return Qe=_,r}function s(n,e,t,o,r,_,a){const c=v(n,p.__wbindgen_malloc,p.__wbindgen_realloc),u=Qe,d=v(e,p.__wbindgen_malloc,p.__wbindgen_realloc),l=Qe,s=v(t,p.__wbindgen_malloc,p.__wbindgen_realloc),f=Qe;return p.moose_nordvpnapp_init(c,u,d,l,s,f,o,i(r),i(_),i(a))>>>0}function f(){return p.moose_nordvpnapp_deinit()>>>0}function g(n){return p.nordvpnapp_set_context_application_config_currentState_activeNetworkInterface_value(n)>>>0}function b(n){return p.nordvpnapp_set_context_application_config_currentState_isOnVpn_value(n)>>>0}function N(n){return p.nordvpnapp_set_context_application_config_currentState_protocol_value(n)>>>0}function w(){return p.nordvpnapp_unset_context_application_config_currentState_securityScore_value()>>>0}function y(n){const e=v(n,p.__wbindgen_malloc,p.__wbindgen_realloc),t=Qe;return p.nordvpnapp_set_context_application_config_currentState_serverCity_value(e,t)>>>0}function S(){return p.nordvpnapp_unset_context_application_config_currentState_serverCity_value()>>>0}function T(n){const e=v(n,p.__wbindgen_malloc,p.__wbindgen_realloc),t=Qe;return p.nordvpnapp_set_context_application_config_currentState_serverCountry_value(e,t)>>>0}function m(){return p.nordvpnapp_unset_context_application_config_currentState_serverCountry_value()>>>0}function h(n){const e=v(n,p.__wbindgen_malloc,p.__wbindgen_realloc),t=Qe;return p.nordvpnapp_set_context_application_config_currentState_serverDomain_value(e,t)>>>0}function C(){return p.nordvpnapp_unset_context_application_config_currentState_serverDomain_value()>>>0}function x(n){const e=v(n,p.__wbindgen_malloc,p.__wbindgen_realloc),t=Qe;return p.nordvpnapp_set_context_application_config_currentState_serverGroup_value(e,t)>>>0}function I(){return p.nordvpnapp_unset_context_application_config_currentState_serverGroup_value()>>>0}function L(n){const e=v(n,p.__wbindgen_malloc,p.__wbindgen_realloc),t=Qe;return p.nordvpnapp_set_context_application_config_currentState_serverIp_value(e,t)>>>0}function V(){return p.nordvpnapp_unset_context_application_config_currentState_serverIp_value()>>>0}function U(n){return p.nordvpnapp_set_context_application_config_currentState_systemColorTheme_value(n)>>>0}function A(n){return p.nordvpnapp_set_context_application_config_currentState_technology_value(n)>>>0}function P(n){return p.nordvpnapp_set_context_application_config_currentState_threatProtectionLiteEnabled_value(n)>>>0}function k(n){return p.nordvpnapp_set_context_application_config_userPreferences_appColorTheme_value(n)>>>0}function D(n){return p.nordvpnapp_set_context_application_config_userPreferences_autoConnectEnabled_value(n)>>>0}function O(n){return p.nordvpnapp_set_context_application_config_userPreferences_autoConnectType_value(n)>>>0}function R(){return p.nordvpnapp_unset_context_application_config_userPreferences_connectionAfterQuittingType_value()>>>0}function E(){return p.nordvpnapp_unset_context_application_config_userPreferences_customDnsEnabled_value()>>>0}function z(){return p.nordvpnapp_unset_context_application_config_userPreferences_darkWebMonitorEnabled_value()>>>0}function M(n){return p.nordvpnapp_set_context_application_config_userPreferences_inAppNotificationsEnabled_value(n)>>>0}function W(n){return p.nordvpnapp_set_context_application_config_userPreferences_killSwitchEnabled_value(n)>>>0}function j(){return p.nordvpnapp_unset_context_application_config_userPreferences_meshnetEnabled_value()>>>0}function B(n){return p.nordvpnapp_set_context_application_config_userPreferences_mfaEnabled_value(n)>>>0}function Q(n){return p.nordvpnapp_set_context_application_config_userPreferences_protocol_value(n)>>>0}function F(n){return p.nordvpnapp_set_context_application_config_userPreferences_pushNotificationsEnabled_value(n)>>>0}function H(n){const e=v(n,p.__wbindgen_malloc,p.__wbindgen_realloc),t=Qe;return p.nordvpnapp_set_context_application_config_userPreferences_splitTunnelingEnabled_meta(e,t)>>>0}function G(){return p.nordvpnapp_unset_context_application_config_userPreferences_splitTunnelingEnabled_meta()>>>0}function $(n){return p.nordvpnapp_set_context_application_config_userPreferences_splitTunnelingEnabled_value(n)>>>0}function q(n){return p.nordvpnapp_set_context_application_config_userPreferences_technology_value(n)>>>0}function J(n){return p.nordvpnapp_set_context_application_config_userPreferences_threatProtectionLiteEnabled_value(n)>>>0}function X(){return p.nordvpnapp_unset_context_application_config_userPreferences_threatprotectionEnabled_value()>>>0}function Z(n){return p.nordvpnapp_set_context_application_config_userPreferences_uiLanguage_value(n)>>>0}function K(){return p.nordvpnapp_unset_context_application_config_userPreferences_uiLanguage_value()>>>0}function Y(n){const e=v(n,p.__wbindgen_malloc,p.__wbindgen_realloc),t=Qe;return p.nordvpnapp_set_context_device_brand(e,t)>>>0}function nn(n){const e=v(n,p.__wbindgen_malloc,p.__wbindgen_realloc),t=Qe;return p.nordvpnapp_set_context_device_browser_name(e,t)>>>0}function en(n){const e=v(n,p.__wbindgen_malloc,p.__wbindgen_realloc),t=Qe;return p.nordvpnapp_set_context_device_browser_userAgent(e,t)>>>0}function tn(n){const e=v(n,p.__wbindgen_malloc,p.__wbindgen_realloc),t=Qe;return p.nordvpnapp_set_context_device_browser_version(e,t)>>>0}function on(n){const e=v(n,p.__wbindgen_malloc,p.__wbindgen_realloc),t=Qe;return p.nordvpnapp_set_context_device_fp(e,t)>>>0}function rn(){return p.nordvpnapp_unset_context_device_fp()>>>0}function pn(n){const e=v(n,p.__wbindgen_malloc,p.__wbindgen_realloc),t=Qe;return p.nordvpnapp_set_context_device_location_city(e,t)>>>0}function _n(){return p.nordvpnapp_unset_context_device_location_city()>>>0}function an(n){const e=v(n,p.__wbindgen_malloc,p.__wbindgen_realloc),t=Qe;return p.nordvpnapp_set_context_device_location_country(e,t)>>>0}function cn(){return p.nordvpnapp_unset_context_device_location_country()>>>0}function un(n){const e=v(n,p.__wbindgen_malloc,p.__wbindgen_realloc),t=Qe;return p.nordvpnapp_set_context_device_model(e,t)>>>0}function dn(n){const e=v(n,p.__wbindgen_malloc,p.__wbindgen_realloc),t=Qe;return p.nordvpnapp_set_context_device_os(e,t)>>>0}function ln(n){const e=v(n,p.__wbindgen_malloc,p.__wbindgen_realloc),t=Qe;return p.nordvpnapp_set_context_device_resolution(e,t)>>>0}function vn(n){const e=v(n,p.__wbindgen_malloc,p.__wbindgen_realloc),t=Qe;return p.nordvpnapp_set_context_device_timeZone(e,t)>>>0}function sn(n){return p.nordvpnapp_set_context_device_type(n)>>>0}function fn(n){const e=v(n,p.__wbindgen_malloc,p.__wbindgen_realloc),t=Qe;return p.nordvpnapp_set_context_user_fp(e,t)>>>0}function gn(){return p.nordvpnapp_unset_context_user_fp()>>>0}function bn(n){const e=v(n,p.__wbindgen_malloc,p.__wbindgen_realloc),t=Qe;return p.nordvpnapp_set_context_user_subscription_currentState_activationDate(e,t)>>>0}function Nn(){return p.nordvpnapp_unset_context_user_subscription_currentState_activationDate()>>>0}function wn(n){return p.nordvpnapp_set_context_user_subscription_currentState_frequencyInterval(n)>>>0}function yn(){return p.nordvpnapp_unset_context_user_subscription_currentState_frequencyInterval()>>>0}function Sn(n){const e=v(n,p.__wbindgen_malloc,p.__wbindgen_realloc),t=Qe;return p.nordvpnapp_set_context_user_subscription_currentState_frequencyUnit(e,t)>>>0}function Tn(){return p.nordvpnapp_unset_context_user_subscription_currentState_frequencyUnit()>>>0}function mn(n){return p.nordvpnapp_set_context_user_subscription_currentState_isActive(n)>>>0}function hn(){return p.nordvpnapp_unset_context_user_subscription_currentState_isActive()>>>0}function Cn(n){return p.nordvpnapp_set_context_user_subscription_currentState_isNewCustomer(n)>>>0}function xn(){return p.nordvpnapp_unset_context_user_subscription_currentState_isNewCustomer()>>>0}function In(n){return p.nordvpnapp_set_context_user_subscription_currentState_merchantId(n)>>>0}function Ln(){return p.nordvpnapp_unset_context_user_subscription_currentState_merchantId()>>>0}function Vn(n){return p.nordvpnapp_set_context_user_subscription_currentState_paymentAmount(n)>>>0}function Un(){return p.nordvpnapp_unset_context_user_subscription_currentState_paymentAmount()>>>0}function An(n){const e=v(n,p.__wbindgen_malloc,p.__wbindgen_realloc),t=Qe;return p.nordvpnapp_set_context_user_subscription_currentState_paymentCurrency(e,t)>>>0}function Pn(){return p.nordvpnapp_unset_context_user_subscription_currentState_paymentCurrency()>>>0}function kn(n){const e=v(n,p.__wbindgen_malloc,p.__wbindgen_realloc),t=Qe;return p.nordvpnapp_set_context_user_subscription_currentState_paymentProvider(e,t)>>>0}function Dn(){return p.nordvpnapp_unset_context_user_subscription_currentState_paymentProvider()>>>0}function On(n){const e=v(n,p.__wbindgen_malloc,p.__wbindgen_realloc),t=Qe;return p.nordvpnapp_set_context_user_subscription_currentState_paymentStatus(e,t)>>>0}function Rn(){return p.nordvpnapp_unset_context_user_subscription_currentState_paymentStatus()>>>0}function En(n){return p.nordvpnapp_set_context_user_subscription_currentState_planId(n)>>>0}function zn(){return p.nordvpnapp_unset_context_user_subscription_currentState_planId()>>>0}function Mn(n){const e=v(n,p.__wbindgen_malloc,p.__wbindgen_realloc),t=Qe;return p.nordvpnapp_set_context_user_subscription_currentState_planType(e,t)>>>0}function Wn(){return p.nordvpnapp_unset_context_user_subscription_currentState_planType()>>>0}function jn(n){const e=v(n,p.__wbindgen_malloc,p.__wbindgen_realloc),t=Qe;return p.nordvpnapp_set_context_user_subscription_currentState_subscriptionStatus(e,t)>>>0}function Bn(){return p.nordvpnapp_unset_context_user_subscription_currentState_subscriptionStatus()>>>0}function Qn(n){const e=v(n,p.__wbindgen_malloc,p.__wbindgen_realloc),t=Qe;return p.nordvpnapp_set_context_user_subscription_history(e,t)>>>0}function Fn(n,e,t,o){return p.nordvpnapp_send_serviceQuality_authorization_register(n,e,t,o)>>>0}function Hn(n,e,t,o){return p.nordvpnapp_send_serviceQuality_authorization_login(n,e,t,o)>>>0}function Gn(n,e,t,o){return p.nordvpnapp_send_serviceQuality_authorization_logout(n,e,t,o)>>>0}function $n(n,e,t,o,r,_,a,c,i,u,d,l,s,f,g,b){const N=v(a,p.__wbindgen_malloc,p.__wbindgen_realloc),w=Qe,y=v(c,p.__wbindgen_malloc,p.__wbindgen_realloc),S=Qe,T=v(i,p.__wbindgen_malloc,p.__wbindgen_realloc),m=Qe,h=v(u,p.__wbindgen_malloc,p.__wbindgen_realloc),C=Qe,x=v(d,p.__wbindgen_malloc,p.__wbindgen_realloc),I=Qe;return p.nordvpnapp_send_serviceQuality_servers_connect(n,e,t,o,r,_,N,w,y,S,T,m,h,C,x,I,l,s,f,g,b)>>>0}function qn(n,e,t,o,r,_,a,c,i,u,d,l,s,f,g,b){const N=v(a,p.__wbindgen_malloc,p.__wbindgen_realloc),w=Qe,y=v(c,p.__wbindgen_malloc,p.__wbindgen_realloc),S=Qe,T=v(i,p.__wbindgen_malloc,p.__wbindgen_realloc),m=Qe,h=v(u,p.__wbindgen_malloc,p.__wbindgen_realloc),C=Qe,x=v(d,p.__wbindgen_malloc,p.__wbindgen_realloc),I=Qe;return p.nordvpnapp_send_serviceQuality_servers_disconnect(n,e,t,o,r,_,N,w,y,S,T,m,h,C,x,I,l,s,f,g,b)>>>0}function Jn(n){return p.nordvpnapp_send_serviceQuality_status_heartbeat(n)>>>0}function Xn(n,e,t,o){const r=v(n,p.__wbindgen_malloc,p.__wbindgen_realloc),_=Qe,a=v(e,p.__wbindgen_malloc,p.__wbindgen_realloc),c=Qe,i=v(o,p.__wbindgen_malloc,p.__wbindgen_realloc),u=Qe;return p.nordvpnapp_send_userInterface_uiItems_click(r,_,a,c,t,i,u)>>>0}function Zn(n,e,t,o){const r=v(n,p.__wbindgen_malloc,p.__wbindgen_realloc),_=Qe,a=v(e,p.__wbindgen_malloc,p.__wbindgen_realloc),c=Qe,i=v(o,p.__wbindgen_malloc,p.__wbindgen_realloc),u=Qe;return p.nordvpnapp_send_userInterface_uiItems_show(r,_,a,c,t,i,u)>>>0}function Kn(n,e){try{return n.apply(this,e)}catch(n){p.__wbindgen_exn_store(i(n))}}const Ge=Object.freeze({NordvpnappOptBoolNone:0,0:"NordvpnappOptBoolNone",NordvpnappOptBoolTrue:1,1:"NordvpnappOptBoolTrue",NordvpnappOptBoolFalse:2,2:"NordvpnappOptBoolFalse"}),$e=Object.freeze({NordvpnappEventTriggerUser:0,0:"NordvpnappEventTriggerUser",NordvpnappEventTriggerApp:1,1:"NordvpnappEventTriggerApp"}),qe=Object.freeze({NordvpnappEventStatusAttempt:0,0:"NordvpnappEventStatusAttempt",NordvpnappEventStatusSuccess:1,1:"NordvpnappEventStatusSuccess",NordvpnappEventStatusFailureDueToUserInterrupt:2,2:"NordvpnappEventStatusFailureDueToUserInterrupt",NordvpnappEventStatusFailureDueToRuntimeException:3,3:"NordvpnappEventStatusFailureDueToRuntimeException"}),Je=Object.freeze({NordvpnappVpnConnectionTriggerNone:0,0:"NordvpnappVpnConnectionTriggerNone",NordvpnappVpnConnectionTriggerAutoConnectUserSetting:1,1:"NordvpnappVpnConnectionTriggerAutoConnectUserSetting",NordvpnappVpnConnectionTriggerAfterSnooze:2,2:"NordvpnappVpnConnectionTriggerAfterSnooze",NordvpnappVpnConnectionTriggerRetry:3,3:"NordvpnappVpnConnectionTriggerRetry",NordvpnappVpnConnectionTriggerKeepAlive:4,4:"NordvpnappVpnConnectionTriggerKeepAlive",NordvpnappVpnConnectionTriggerAfterMeshnetDisconnected:5,5:"NordvpnappVpnConnectionTriggerAfterMeshnetDisconnected"}),Xe=Object.freeze({NordvpnappVpnConnectionPresetNone:0,0:"NordvpnappVpnConnectionPresetNone",NordvpnappVpnConnectionPresetCustom:1,1:"NordvpnappVpnConnectionPresetCustom",NordvpnappVpnConnectionPresetBrowsing:2,2:"NordvpnappVpnConnectionPresetBrowsing",NordvpnappVpnConnectionPresetSpeed:3,3:"NordvpnappVpnConnectionPresetSpeed",NordvpnappVpnConnectionPresetDownload:4,4:"NordvpnappVpnConnectionPresetDownload"}),Ze=Object.freeze({NordvpnappServerSelectionRuleNone:0,0:"NordvpnappServerSelectionRuleNone",NordvpnappServerSelectionRuleCity:1,1:"NordvpnappServerSelectionRuleCity",NordvpnappServerSelectionRuleCountry:2,2:"NordvpnappServerSelectionRuleCountry",NordvpnappServerSelectionRuleRecommended:3,3:"NordvpnappServerSelectionRuleRecommended",NordvpnappServerSelectionRuleRegion:4,4:"NordvpnappServerSelectionRuleRegion",NordvpnappServerSelectionRuleSpecialtyServer:5,5:"NordvpnappServerSelectionRuleSpecialtyServer",NordvpnappServerSelectionRuleSpecificServer:6,6:"NordvpnappServerSelectionRuleSpecificServer",NordvpnappServerSelectionRuleSpecialtyServerWithCountry:7,7:"NordvpnappServerSelectionRuleSpecialtyServerWithCountry",NordvpnappServerSelectionRuleSpecialtyServerWithRegion:8,8:"NordvpnappServerSelectionRuleSpecialtyServerWithRegion",NordvpnappServerSelectionRuleSpecialtyServerWithSpecificServer:9,9:"NordvpnappServerSelectionRuleSpecialtyServerWithSpecificServer",NordvpnappServerSelectionRuleSpecificServerInACountry:10,10:"NordvpnappServerSelectionRuleSpecificServerInACountry"}),Ke=Object.freeze({NordvpnappServerListSourceNone:0,0:"NordvpnappServerListSourceNone",NordvpnappServerListSourceRecommendedByApi:1,1:"NordvpnappServerListSourceRecommendedByApi",NordvpnappServerListSourceLocallyCachedServerList:2,2:"NordvpnappServerListSourceLocallyCachedServerList"}),Ye=Object.freeze({NordvpnappVpnConnectionProtocolNone:0,0:"NordvpnappVpnConnectionProtocolNone",NordvpnappVpnConnectionProtocolUdp:1,1:"NordvpnappVpnConnectionProtocolUdp",NordvpnappVpnConnectionProtocolTcp:2,2:"NordvpnappVpnConnectionProtocolTcp",NordvpnappVpnConnectionProtocolRecommended:3,3:"NordvpnappVpnConnectionProtocolRecommended",NordvpnappVpnConnectionProtocolHttpProxy:4,4:"NordvpnappVpnConnectionProtocolHttpProxy",NordvpnappVpnConnectionProtocolHttpsProxy:5,5:"NordvpnappVpnConnectionProtocolHttpsProxy"}),nt=Object.freeze({NordvpnappVpnConnectionTechnologyNone:0,0:"NordvpnappVpnConnectionTechnologyNone",NordvpnappVpnConnectionTechnologyNordlynx:1,1:"NordvpnappVpnConnectionTechnologyNordlynx",NordvpnappVpnConnectionTechnologyOpenvpn:2,2:"NordvpnappVpnConnectionTechnologyOpenvpn",NordvpnappVpnConnectionTechnologySkylark:3,3:"NordvpnappVpnConnectionTechnologySkylark",NordvpnappVpnConnectionTechnologyIkev2:4,4:"NordvpnappVpnConnectionTechnologyIkev2",NordvpnappVpnConnectionTechnologyRecommended:5,5:"NordvpnappVpnConnectionTechnologyRecommended"}),et=Object.freeze({NordvpnappUserInterfaceItemTypeButton:0,0:"NordvpnappUserInterfaceItemTypeButton",NordvpnappUserInterfaceItemTypeCheckBox:1,1:"NordvpnappUserInterfaceItemTypeCheckBox",NordvpnappUserInterfaceItemTypeRadioButton:2,2:"NordvpnappUserInterfaceItemTypeRadioButton",NordvpnappUserInterfaceItemTypeSwitch:3,3:"NordvpnappUserInterfaceItemTypeSwitch",NordvpnappUserInterfaceItemTypeSlider:4,4:"NordvpnappUserInterfaceItemTypeSlider",NordvpnappUserInterfaceItemTypeTextBox:5,5:"NordvpnappUserInterfaceItemTypeTextBox",NordvpnappUserInterfaceItemTypeDropdown:6,6:"NordvpnappUserInterfaceItemTypeDropdown",NordvpnappUserInterfaceItemTypeTabOrScreen:7,7:"NordvpnappUserInterfaceItemTypeTabOrScreen",NordvpnappUserInterfaceItemTypeHyperlink:8,8:"NordvpnappUserInterfaceItemTypeHyperlink"}),tt=(Object.freeze({NordvpnappNotificationCategoryInApp:0,0:"NordvpnappNotificationCategoryInApp",NordvpnappNotificationCategoryPush:1,1:"NordvpnappNotificationCategoryPush"}),Object.freeze({NordvpnappDeviceTypeUndefined:0,0:"NordvpnappDeviceTypeUndefined",NordvpnappDeviceTypeDesktop:1,1:"NordvpnappDeviceTypeDesktop",NordvpnappDeviceTypeMobile:2,2:"NordvpnappDeviceTypeMobile",NordvpnappDeviceTypeServer:3,3:"NordvpnappDeviceTypeServer",NordvpnappDeviceTypeTv:4,4:"NordvpnappDeviceTypeTv"})),ot=(Object.freeze({NordvpnappLogLevelInfo:0,0:"NordvpnappLogLevelInfo",NordvpnappLogLevelDebug:1,1:"NordvpnappLogLevelDebug",NordvpnappLogLevelError:2,2:"NordvpnappLogLevelError",NordvpnappLogLevelCritical:3,3:"NordvpnappLogLevelCritical"}),Object.freeze({NordvpnappUiLanguageEnglish:0,0:"NordvpnappUiLanguageEnglish",NordvpnappUiLanguageFrench:1,1:"NordvpnappUiLanguageFrench",NordvpnappUiLanguageGerman:2,2:"NordvpnappUiLanguageGerman",NordvpnappUiLanguageSpanish:3,3:"NordvpnappUiLanguageSpanish",NordvpnappUiLanguageChineseTraditional:4,4:"NordvpnappUiLanguageChineseTraditional",NordvpnappUiLanguageChineseSimplified:5,5:"NordvpnappUiLanguageChineseSimplified",NordvpnappUiLanguageChineseHongKong:6,6:"NordvpnappUiLanguageChineseHongKong",NordvpnappUiLanguageChineseMacao:7,7:"NordvpnappUiLanguageChineseMacao",NordvpnappUiLanguageJapanese:8,8:"NordvpnappUiLanguageJapanese",NordvpnappUiLanguageKorean:9,9:"NordvpnappUiLanguageKorean",NordvpnappUiLanguagePortuguesePortugal:10,10:"NordvpnappUiLanguagePortuguesePortugal",NordvpnappUiLanguagePortugueseBrazil:11,11:"NordvpnappUiLanguagePortugueseBrazil",NordvpnappUiLanguageArabic:12,12:"NordvpnappUiLanguageArabic",NordvpnappUiLanguageChineseTaiwan:13,13:"NordvpnappUiLanguageChineseTaiwan",NordvpnappUiLanguageItalian:14,14:"NordvpnappUiLanguageItalian",NordvpnappUiLanguagePolish:15,15:"NordvpnappUiLanguagePolish",NordvpnappUiLanguageSwedish:16,16:"NordvpnappUiLanguageSwedish",NordvpnappUiLanguageDutch:17,17:"NordvpnappUiLanguageDutch"})),rt=Object.freeze({NordvpnappVpnAutoConnectTypeNone:0,0:"NordvpnappVpnAutoConnectTypeNone",NordvpnappVpnAutoConnectTypeWhenOnUntrustedNetwork:1,1:"NordvpnappVpnAutoConnectTypeWhenOnUntrustedNetwork",NordvpnappVpnAutoConnectTypeWhenOnAnyNetwork:2,2:"NordvpnappVpnAutoConnectTypeWhenOnAnyNetwork",NordvpnappVpnAutoConnectTypeWhenOnCellularNetwork:3,3:"NordvpnappVpnAutoConnectTypeWhenOnCellularNetwork",NordvpnappVpnAutoConnectTypeWhenTheAppLaunches:4,4:"NordvpnappVpnAutoConnectTypeWhenTheAppLaunches",NordvpnappVpnAutoConnectTypeNoneOrUnknown:5,5:"NordvpnappVpnAutoConnectTypeNoneOrUnknown",NordvpnappVpnAutoConnectTypeWhenOnEthernet:6,6:"NordvpnappVpnAutoConnectTypeWhenOnEthernet",NordvpnappVpnAutoConnectTypeMultiple:7,7:"NordvpnappVpnAutoConnectTypeMultiple"}),pt=Object.freeze({NordvpnappNetworkInterfaceTypeNone:0,0:"NordvpnappNetworkInterfaceTypeNone",NordvpnappNetworkInterfaceTypeCellular:1,1:"NordvpnappNetworkInterfaceTypeCellular",NordvpnappNetworkInterfaceTypeEthernet:2,2:"NordvpnappNetworkInterfaceTypeEthernet",NordvpnappNetworkInterfaceTypeWifi:3,3:"NordvpnappNetworkInterfaceTypeWifi",NordvpnappNetworkInterfaceTypeOther:4,4:"NordvpnappNetworkInterfaceTypeOther"}),_t=(Object.freeze({NordvpnappMobileNetworkType2G:0,0:"NordvpnappMobileNetworkType2G",NordvpnappMobileNetworkType3G:1,1:"NordvpnappMobileNetworkType3G",NordvpnappMobileNetworkType4G:2,2:"NordvpnappMobileNetworkType4G",NordvpnappMobileNetworkType5G:3,3:"NordvpnappMobileNetworkType5G",NordvpnappMobileNetworkTypeEdge:4,4:"NordvpnappMobileNetworkTypeEdge",NordvpnappMobileNetworkTypeOther:5,5:"NordvpnappMobileNetworkTypeOther"}),Object.freeze({NordvpnappColorThemeLight:0,0:"NordvpnappColorThemeLight",NordvpnappColorThemeDark:1,1:"NordvpnappColorThemeDark",NordvpnappColorThemeSystem:2,2:"NordvpnappColorThemeSystem"}));Object.freeze({NordvpnappVpnConnectionAfterQuittingTypeAskEveryTime:0,0:"NordvpnappVpnConnectionAfterQuittingTypeAskEveryTime",NordvpnappVpnConnectionAfterQuittingTypeStayConnected:1,1:"NordvpnappVpnConnectionAfterQuittingTypeStayConnected",NordvpnappVpnConnectionAfterQuittingTypeDisconnect:2,2:"NordvpnappVpnConnectionAfterQuittingTypeDisconnect"}),Object.freeze({NordvpnappShowApplicationInDock:0,0:"NordvpnappShowApplicationInDock",NordvpnappShowApplicationInMenuBar:1,1:"NordvpnappShowApplicationInMenuBar",NordvpnappShowApplicationInBoth:2,2:"NordvpnappShowApplicationInBoth"});function Yn(n){c(n)}function ne(n){return i(n)}function ee(n,e){return i(d(n,e))}function te(n,e){const t=a(e),o="number"==typeof t?t:void 0;(0===je.byteLength&&(je=new Float64Array(p.memory.buffer)),je)[n/8+1]=l(o)?0:o,(0===Be.byteLength&&(Be=new Int32Array(p.memory.buffer)),Be)[n/4+0]=!l(o)}function oe(n){const e=a(n);return"object"==typeof e&&null!==e}function re(){return Kn((function(n,e,t){var o,r;a(n).randomFillSync((o=e,r=t,u().subarray(o/1,o/1+r)))}),arguments)}function pe(){return Kn((function(n,e){a(n).getRandomValues(a(e))}),arguments)}function _e(n){return i(a(n).crypto)}function ae(n){return i(a(n).process)}function ce(n){return i(a(n).versions)}function ie(n){return i(a(n).node)}function ue(n){return"string"==typeof a(n)}function de(){return Kn((function(){return i(n.require)}),arguments)}function le(n){return i(a(n).msCrypto)}function ve(n){return"function"==typeof a(n)}function se(n){return i(a(n))}function fe(){return Kn((function(){return i(self.self)}),arguments)}function ge(){return Kn((function(){return i(window.window)}),arguments)}function be(){return Kn((function(){return i(globalThis.globalThis)}),arguments)}function Ne(){return Kn((function(){return i(t.g.global)}),arguments)}function we(n){return void 0===a(n)}function ye(n,e){return i(new Function(d(n,e)))}function Se(n){return i(Array.of(a(n)))}function Te(n,e,t){return i(Array.of(a(n),a(e),a(t)))}function me(){return Kn((function(n,e,t){return i(a(n).apply(a(e),a(t)))}),arguments)}function he(){return Kn((function(n,e){return i(a(n).call(a(e)))}),arguments)}function Ce(){return Kn((function(n,e,t){return i(a(n).call(a(e),a(t)))}),arguments)}function xe(n){return a(n).getTime()}function Ie(n){return a(n).getTimezoneOffset()}function Le(){return i(new Date)}function Ve(n){return i(a(n).buffer)}function Ue(n){return i(new Uint8Array(a(n)))}function Ae(n){return i(new Uint8Array(n>>>0))}function Pe(n,e,t){return i(a(n).subarray(e>>>0,t>>>0))}function ke(n){return a(n).length}function De(n,e,t){a(n).set(a(e),t>>>0)}function Oe(n,e){throw new Error(d(n,e))}function Re(){return i(p.memory)}r()}catch(at){r(at)}}))},19800:(n,e,t)=>{t.a(n,(async(o,r)=>{try{var p,_=o([p=t(92459)]),[p]=_.then?(await _)():_;await t.v(e,n.id,"1c478277b772975a49c2",{"./moosenordvpnapp_bg.js":{__wbindgen_object_drop_ref:p.ug$,__wbindgen_number_new:p.pT7,__wbindgen_string_new:p.h4u,__wbindgen_number_get:p.M19,__wbindgen_is_object:p.WlW,__wbg_randomFillSync_6894564c2c334c42:p.exY,__wbg_getRandomValues_805f1c3d65988a5a:p.eaI,__wbg_crypto_e1d53a1d73fb10b8:p.Nko,__wbg_process_038c26bf42b093f8:p.DIc,__wbg_versions_ab37218d2f0b24a8:p.QT3,__wbg_node_080f4b19d15bc1fe:p.f5q,__wbindgen_is_string:p.eYF,__wbg_require_78a3dcfbdba9cbce:p.goM,__wbg_msCrypto_6e7d3e1f92610cbb:p.crw,__wbindgen_is_function:p.o$X,__wbindgen_object_clone_ref:p.m_1,__wbg_self_6d479506f72c6a71:p.yBo,__wbg_window_f2557cc78490aceb:p.Sne,__wbg_globalThis_7f206bda628d5286:p.$Li,__wbg_global_ba75c50d1cf384f4:p.wJ_,__wbindgen_is_undefined:p.XP4,__wbg_newnoargs_b5b063fc6c2f0376:p.gWb,__wbg_of_d79bf3cec607f7a4:p.Ngr,__wbg_of_22ee6ea02403744c:p.TPR,__wbg_apply_22a3220d244124da:p.D_W,__wbg_call_97ae9d8645dc388b:p.Niw,__wbg_call_168da88779e35f61:p.VDL,__wbg_getTime_cb82adb2556ed13e:p.Zzy,__wbg_getTimezoneOffset_89bd4275e1ca8341:p.uhX,__wbg_new0_a57059d72c5b7aee:p.NWt,__wbg_buffer_3f3d764d4747d564:p.jpb,__wbg_new_8c3f0052272a457a:p.lBI,__wbg_newwithlength_f5933855e4f48a19:p.ibT,__wbg_subarray_58ad4efbb5bcb886:p.kHX,__wbg_length_9e1ae1900cb0fbd5:p.bjU,__wbg_set_83db9690f9353e79:p.fP1,__wbindgen_throw:p.Or8,__wbindgen_memory:p.oHO}}),r()}catch(n){r(n)}}),1)}}]);