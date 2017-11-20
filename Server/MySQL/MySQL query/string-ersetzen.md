UPDATE table SET field = REPLACE(field, 'string', 'anothervalue') WHERE field LIKE '%string%';

/* Ersetzt String null durch Wert NULL */

UPDATE name_der_tabelle
set name_des_felds = NULL
where name_des_felds = 'null'



update name_der_tabelle
    set name_des_felds1 = case when name_des_felds1 = 'null' then Null else name_des_felds1 End
      , name_des_felds2 = case when name_des_felds2 = 'null' then Null else name_des_felds2 End
      , name_des_felds3 = case when name_des_felds3 = 'null' then Null else name_des_felds3 End