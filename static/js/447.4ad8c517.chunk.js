"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[447],{7447:(s,e,r)=>{r.r(e),r.d(e,{default:()=>z});var o=r(4420),l=r(2938),n=r(2791);const t="Users_big__ozkNB",a="Users_userPhoto__rUzSe",i="Users_selectPage__qoPUf",g="Users_page__xLZ9Y",c="Users_grid__yw0pn",p="Users_profile__q4w+g",u="Users_carousel__3AoHY",h="Users_btn__2tKNe";var d=r(8478),P=r(9443),_=r(1087),f=r(184);const w=s=>{let e,r=Math.ceil(s.totalUsersCount/s.pageSize),o=[];for(let n=1;n<=r;n++)o.push(n);let l=s.currentPage;return e=l-3<0?o.slice(0,5):o.slice(l-3,l+2),(0,f.jsxs)("div",{className:t,children:[(0,f.jsx)("div",{className:u,children:e.map((e=>(0,f.jsx)("div",{className:s.currentPage===e?i:g,onClick:()=>{s.onPageChanged(e)},children:e})))}),(0,f.jsx)("div",{className:c,children:s.users.map((e=>(0,f.jsxs)("div",{className:p,children:[(0,f.jsx)("div",{children:(0,f.jsx)(_.OL,{to:"./../profile/"+e.id,children:(0,f.jsx)("img",{alt:"User image",src:null!==e.photos.small?e.photos.small:d,className:a})})}),(0,f.jsx)("div",{children:"Location"}),(0,f.jsx)("span",{children:e.name}),(0,f.jsx)("div",{className:h,children:e.followed?(0,f.jsx)(P.Z,{disabled:s.followingInProgress.some((s=>s===e.id)),onClick:()=>{s.unfollow(e.id)},name:"Unfollow"}):(0,f.jsx)(P.Z,{disabled:s.followingInProgress.some((s=>s===e.id)),onClick:()=>{s.follow(e.id)},name:"Follow"})})]},e.id)))})]})};var m=r(539);const U=s=>s.usersPage.users,x=s=>s.usersPage.pageSize,C=s=>s.usersPage.totalUsersCount,j=s=>s.usersPage.isFetching,k=s=>s.usersPage.followingInProgress,v=s=>s.usersPage.currentPage;class N extends n.Component{constructor(){super(...arguments),this.onPageChanged=s=>{this.props.getUsersThunkCreator(s,this.props.pageSize)}}componentDidMount(){this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)}render(){return(0,f.jsx)(f.Fragment,{children:this.props.isFetching?(0,f.jsx)(m.Z,{}):(0,f.jsx)(w,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})})}}const z=(0,o.$j)((s=>({users:U(s),pageSize:x(s),totalUsersCount:C(s),currentPage:v(s),isFetching:j(s),followingInProgress:k(s)})),{follow:l.ZN,unfollow:l.fv,setCurrentPage:l.D4,toggleFollowingProgress:l.ZH,getUsersThunkCreator:l.Uk})(N)},8478:(s,e,r)=>{s.exports=r.p+"static/media/user.56c6643a0e5a32948dec.jpg"}}]);
//# sourceMappingURL=447.4ad8c517.chunk.js.map