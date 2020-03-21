create table if not exists client
(
	id bigint auto_increment,
	created_at TIMESTAMP null,
	updated_at TIMESTAMP null,
	document varchar(14) not null,
	full_name varchar(100) null,
	sex varchar(6) null,
	birth_date DATE null,
	mother_name varchar(100) null,
	issuing_body varchar(10) null,
	date_issue DATE null,
	covenant varchar(10) null,
	constraint client primary key (id)
);

create unique index client_document_uindex
	on client (document);

create table if not exists address
(
	id bigint auto_increment,
	created_at TIMESTAMP null,
	updated_at TIMESTAMP null,
	is_main bit not null,
	street varchar(50) null,
	number varchar(10) null,
	zip_code int(8) null,
	neighborhood varchar(20) null,
	city varchar(20) null,
	state varchar(20) null,
	complement varchar(50) null,
	client_id bigint null,
	constraint address_pk primary key (id),
	constraint address_client_id_fk foreign key (client_id) references client (id)
);

create table if not exists contact
(
	id bigint auto_increment,
	created_at TIMESTAMP null,
    updated_at TIMESTAMP null,
	is_main bit null,
	phone_number varchar(20) null,
	email_address varchar(50) null,
	description varchar(100) null,
	client_id bigint null,
	constraint contact_pk primary key (id),
	constraint contact_client_id_fk foreign key (client_id) references client (id)
);

create table if not exists bank_account
(
	id bigint auto_increment,
	created_at TIMESTAMP null,
	updated_at TIMESTAMP null,
	is_main bit null,
	code varchar(10) null,
	agency int null,
	agency_digit int null,
	account int null,
	account_digit int null,
	client_id bigint null,
	constraint bank_account_pk primary key (id),
	constraint bank_account_client_id_fk foreign key (client_id) references client (id)
);

create table if not exists proposal_plan
(
	id bigint auto_increment,
	created_at TIMESTAMP null,
	updated_at TIMESTAMP null,
	name varchar(20) null,
	description varchar(100) null,
	installments int null,
	interest_rate decimal(17,2) null,
	min_amount decimal(17,2) null,
	max_amount decimal(17,2) null,
	start_at TIMESTAMP null,
	end_at TIMESTAMP null,
	constraint proposal_plan_pk	primary key (id)
);

create table if not exists contract
(
    id bigint auto_increment,
    created_at TIMESTAMP null,
    updated_at TIMESTAMP null,
    uuid varchar(36) null,
    title varchar(50) null,
    description varchar(100) null,
    params json null,
    signature varchar(100) null,
    constraint contract_pk primary key (id)
);

create unique index contract_uuid_uindex
	on contract (uuid);

create table if not exists clause
(
    id bigint auto_increment,
    created_at TIMESTAMP null,
    updated_at TIMESTAMP null,
    title varchar(50) null,
    number bigint null,
    description varchar(255) null,
    contract_id bigint null,
    constraint clause_pk primary key (id),
    constraint contract_id_fk foreign key (contract_id) references contract(id)
);

create table if not exists proposal
(
	id bigint auto_increment,
	created_at TIMESTAMP null,
	updated_at TIMESTAMP null,
	uuid varchar(36) not null,
	amount decimal(17,2) null,
	status int null,
	proposal_plan_id bigint null,
	client_id bigint null,
	contract_id bigint null,
	constraint proposal_pk primary key (id),
	constraint proposal_plan_id_fk foreign key (proposal_plan_id) references proposal_plan (id),
	constraint client_id_fk foreign key (client_id) references client(id),
	constraint proposal_contract_id_fk foreign key (contract_id) references contract(id)
);

create unique index proposal_uuid_uindex
	on proposal (uuid);