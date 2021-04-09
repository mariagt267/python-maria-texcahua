adnseq = ["A", "C", "T", "G", "A", "T", "G", "T", "A", "C"]
adnseq2 = ["T", "G", "A", "T", "G"]

n = len (adnseq)	# Longitud de adnseq
print adnseq
print "length = ", n
print "first position = ", adnseq[0]
print "last position = ", adnseq[n-1]
print "first 3 positions = ", adnseq[0:3]
print "las 5 positions = ", adnseq[-5:]

print "\ninserting one item "
adnseq.append("T")
n = len(adnseq)		#longitud de adnseq
print adnseq
print "length = ", n

print "\nreplace first position with T"
adnseq[0] = "T"
print adnseq

print "\ndelete last position"
adnseq.pop(n-1)
print adnseq

print "\nnew adnseq = adnseq + adnseq2\n"

newadnseq = adnseq + adnseq2
print adnseq
print adnseq2
print newadnseq
print "length = ", len(newadnseq)
