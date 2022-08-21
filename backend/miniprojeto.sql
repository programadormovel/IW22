create database miniprojeto;

use miniprojeto;

create table nomes (
id int primary key auto_increment,
nome varchar(250) not null,
sobrenome varchar(250) null);

insert into nomes (nome, sobrenome) values ('Adriano', 'Domingues');

select id, nome, sobrenome from nomes;

