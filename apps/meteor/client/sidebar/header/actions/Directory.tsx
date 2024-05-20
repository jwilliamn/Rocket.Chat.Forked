import { Sidebar } from '@rocket.chat/fuselage';
import { useMutableCallback } from '@rocket.chat/fuselage-hooks';
import { useUser, useLayout, useRouter, useCurrentRoutePath } from '@rocket.chat/ui-contexts';
import type { HTMLAttributes } from 'react';
import React from 'react';

type DirectoryProps = Omit<HTMLAttributes<HTMLElement>, 'is'>;

const Directory = (props: DirectoryProps) => {
	const user = useUser(); 

	const router = useRouter();
	const { sidebar } = useLayout();
	const handleDirectory = useMutableCallback(() => {
		// if (user.roles.includes('admin')){
		// 	sidebar.toggle();
		// 	router.navigate('/directory');
		// }
		sidebar.toggle();
		router.navigate('/directory');
	});
	const currentRoute = useCurrentRoutePath();

	return (
		<Sidebar.TopBar.Action {...props} icon='notebook-hashtag' onClick={handleDirectory} pressed={currentRoute?.includes('/directory')} />
	);
};

export default Directory;
