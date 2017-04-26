# Non-static method template::fetch() should not be called statically,

* $tplTagLinks = !empty($tplTagLinks) ? template::fetch($tplTagLinks) : false;
* $tplTagLinks = !empty($tplTagLinks) ? (new template)->fetch($tplTagLinks) : false;


$modx->dbConnect()                 $modx->db->connect();
$modx->rs                          $modx->db->conn;
$modx->dbQuery($sql)               $modx->db->query($sql);
$modx->recordCount($rs)            $modx->db->getRecordCount($rs);
$modx->fetchRow($rs,$mode='assoc') $modx->db->getRow($rs, $mode);
$modx->affectedRows($rs)           $modx->db->getAffectedRows($rs);
$modx->insertId($rs)               $modx->db->getInsertId($rs);
$modx->dbClose()                   $modx->db->disconnect();