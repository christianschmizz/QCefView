#ifndef QCEFVIEW_AUTHENTICATIONREQUEST_H
#define QCEFVIEW_AUTHENTICATIONREQUEST_H
#pragma once
#include <QCefView_global.h>

#pragma region qt_headers
#include <QUrl>
#pragma endregion qt_headers

#pragma region qt_headers
#include <QScopedPointer>
#pragma endregion qt_headers

class QCefAuthenticationRequestPrivate;

class QCEFVIEW_EXPORT QCefAuthenticationRequest
{
  Q_DECLARE_PRIVATE(QCefAuthenticationRequest)
  QScopedPointer<QCefAuthenticationRequestPrivate> d_ptr;

  Q_DISABLE_COPY(QCefAuthenticationRequest)
  QCefAuthenticationRequest(QCefAuthenticationRequest&&) = delete;
  QCefAuthenticationRequest& operator=(QCefAuthenticationRequest&&) = delete;

  friend class QCefView;

  QCefAuthenticationRequest();

public:
  ~QCefAuthenticationRequest();

  void cont(QString& username, QString& password) const;
  void cancel() const;

  QUrl originUrl() const;

  QUrl url() const;

  QString realm() const;

  bool isProxy() const;
};

#endif // QCEFVIEW_AUTHENTICATIONREQUEST_H
