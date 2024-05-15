export interface IAssetProps {
	_ref: string;
	_type: string;
}

export interface IIimageServicesProps {
	_type: string;
	asset: IAssetProps;
}

export interface IServicesListProps {
	_id: string;
	servicesTitle: string;
	imageServices: IIimageServicesProps;
	imageServicesAlt: string;
	servicesText: string;
}

export interface IServicesListDataProps {
	data: IServicesListProps;
}
