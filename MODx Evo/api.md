$docID = (isset($docID)) ? $docID : $modx->documentIdentifier;
$tvout=$modx->getTemplateVarOutput('TV-Name',$docID);
echo $tvout['TV-Name']

$docID = (isset($docID)) ? $docID : $modx->documentIdentifier;