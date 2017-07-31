"use strict";

React.createElement(
	"div",
	{ className: "header__user" },
	user ? React.createElement(
		"div",
		{ className: "header__item-vcentered header__auth" },
		React.createElement(
			"span",
			{
				className: "header__item-vcentered header__greeting text text--lg padding-right-md" },
			user.displayName
		),
		user.avatarFile ? React.createElement("img", { className: "header__item-vcentered header__avatar",
			src: "/user-avatars/" + user.avatarFile }) : React.createElement("i", {
			className: "header__item-vcentered header__avatar-icon icon icon--account-circle icon--white icon--xxxl" }),
		React.createElement(
			"a",
			{ href: "/logout", className: "header__greeting link text text--white text--xs padding-left-md" },
			"Log out"
		)
	) : React.createElement(
		"button",
		{ type: "button", onClick: function onClick() {
				return undefined.setState({ loginModalOpen: true });
			},
			className: "btn header__auth" },
		React.createElement("i", {
			className: "header__item-vcentered header__avatar-icon icon icon--account-circle icon--white icon--xxxl" }),
		React.createElement(
			"span",
			{
				className: "header__item-vcentered header__auth-links" },
			React.createElement(
				"strong",
				null,
				"Sign up"
			),
			React.createElement("br", null),
			"or Log in"
		)
	)
);