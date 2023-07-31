#include "QCefAuthenticationRequest.h"

#include <QString>

#include "details/QCefAuthenticationRequestPrivate.h"
#include "details/utils/CommonUtils.h"

void
QCefAuthenticationRequest::cont(QString& username, QString& password) const
{
  Q_D(const QCefAuthenticationRequest);
  return d_ptr->callback->Continue(username.toStdString(), password.toStdString());
}

void
QCefAuthenticationRequest::cancel() const
{
  Q_D(const QCefAuthenticationRequest);
  return d_ptr->callback->Cancel();
}

QUrl
QCefAuthenticationRequest::originUrl() const
{
  Q_D(const QCefAuthenticationRequest);
  return d_ptr->originUrl;
}

QUrl
QCefAuthenticationRequest::url() const
{
  Q_D(const QCefAuthenticationRequest);
  return d_ptr->url;
}

QString
QCefAuthenticationRequest::realm() const
{
  Q_D(const QCefAuthenticationRequest);
  return d_ptr->realm;
}

bool
QCefAuthenticationRequest::isProxy() const
{
  Q_D(const QCefAuthenticationRequest);
  return d_ptr->isProxy;
}
